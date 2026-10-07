// Isolated browser demo. Fingerprints are only for local request replay checks.
function demoFingerprintBytes(s){const out=[];for(let j=0;j<8;j++){let h=(2166136261^j)>>>0;for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619)>>>0;out.push(h>>>24,(h>>>16)&255,(h>>>8)&255,h&255);}return out;}
// Generated from validated Code.gs; request-local state. Do not edit manually.
/** @param {any} options */
function createDomain(options){
const Date=options.clock||globalThis.Date;
const {tables,headers,actor='',sessionToken='',cacheValues={},prepareFile=()=>{throw Error('Chưa có bộ lưu minh chứng')}}=options;
const writes=new Map(),cacheWrites=new Map(),cache=new Map(Object.entries(cacheValues));
const Utilities={getUuid:()=>crypto.randomUUID(),DigestAlgorithm:{SHA_256:'sha256'},Charset:{UTF_8:'utf8'},computeDigest:(_,s)=>demoFingerprintBytes(s),computeHmacSha256Signature:()=>{throw Error('Chỉ mô phỏng tài khoản demo');},formatDate:d=>new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Ho_Chi_Minh',year:'numeric',month:'2-digit',day:'2-digit'}).format(d)};
const CacheService={getScriptCache:()=>({get:k=>cache.get(k),put:(k,v,ttl)=>{cache.set(k,v);cacheWrites.set(k,{key:k,value:v,ttl});},remove:k=>{cache.delete(k);cacheWrites.set(k,{key:k,remove:true});}})};
/* Shared arithmetic. Ratios are percentage integers, difficulty is a multiplier. */
var KpiCore=(function(){
'use strict';
const round=n=>Math.round(Number((n*100).toFixed(8)))/100;
function score(t){
 if(t.occurrences){const active=t.occurrences.filter(o=>o.status!=='cancelled');const weight=active.reduce((a,o)=>a+Number(o.weight),0);const raw=weight?active.reduce((a,o)=>a+(o.status==='approved'?Number(o.weight)*(Number(t.base)*Number(t.coef))*(.3*Number(o.progress)/100+.7*Number(o.quality)/100):0),0)/weight:0;return {performed:round(raw/Number(t.coef)),actual:round(raw),max:round(t.base*t.coef)};}
 if(![0,60,80,100].includes(Number(t.progress))||![0,60,80,100].includes(Number(t.quality)))throw Error('Tỷ lệ phải là 0, 60, 80 hoặc 100');
 if(![10,12].includes(Number(t.base))||![1,1.1,1.2].includes(Number(t.coef)))throw Error('Điểm chuẩn/hệ số không hợp lệ');
 const performed=Number(t.base)*(.3*Number(t.progress)/100+.7*Number(t.quality)/100);
 return {performed:round(performed),actual:Math.min(round(t.base*t.coef),round(performed*t.coef)),max:round(t.base*t.coef)};
}
function summarize(tasks,general,bonus){
 const accepted=tasks.filter(t=>t.planStatus==='approved'&&!t.cancelled);
 const A=round(accepted.filter(t=>t.inPlan).reduce((s,t)=>s+t.base*t.coef,0));
 const B=round(accepted.reduce((s,t)=>s+(t.occurrences||t.reviewStatus==='approved'?score(t).actual:0),0));
 const kpi=A>0?round(Math.min(70,B/A*70)):null;
 const done=accepted.filter(t=>t.reviewStatus==='approved'&&t.completed&&t.quality>=60).length;
 const exceeded=accepted.filter(t=>t.reviewStatus==='approved'&&t.completed&&t.progress===100&&t.quality===100&&t.completedAt&&t.due&&t.completedAt<t.due).length;
 const bonusCap=kpi===null?0:round(Math.min(7,.1*kpi));
 const reward=round(Math.min(bonusCap,Math.max(0,Number(bonus)||0)));
 const total=kpi===null||general===null?null:round(Math.min(100,kpi+general+reward));
 return {A,B,kpi,general,reward,bonusCap,total,count:accepted.length,done,exceeded,exceedRate:accepted.length?round(exceeded/accepted.length*100):0,pending:accepted.filter(t=>t.reviewStatus!=='approved').length,excellentEligible:total!==null&&total>=90&&accepted.length>0&&done===accepted.length&&exceeded/accepted.length>=.3};
}
return {round,score,summarize};
})();


const KPI_CATALOG = [
  {
    "id": "GVBM-1",
    "role": "GVBM",
    "title": "Xây dựng kế hoạch giáo dục môn học đối với các lớp được phân công; tham gia xây dựng, điều chỉnh kế hoạch giáo dục của tổ chuyên môn.",
    "output": "Kế hoạch giáo dục môn học",
    "sourceDue": "2026-09-30",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.0,
    "max": 10.0,
    "evidence": "Văn bản ban hành và hồ sơ trình",
    "source": "GVBM!B4"
  },
  {
    "id": "GVBM-2",
    "role": "GVBM",
    "title": "Xây dựng kế hoạch bài dạy, học liệu và chuẩn bị phương tiện, thiết bị dạy học theo yêu cầu của chương trình và kế hoạch giáo dục nhà trường.",
    "output": "Kế hoạch bài dạy, học liệu",
    "sourceDue": "Hằng tuần",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.0,
    "max": 10.0,
    "evidence": "Kế hoạch bài dạy",
    "source": "GVBM!B5"
  },
  {
    "id": "GVBM-3",
    "role": "GVBM",
    "title": "Tổ chức dạy học đúng chương trình, yêu cầu cần đạt, đúng thời gian và bảo đảm chất lượng các tiết dạy theo thời khóa biểu, phân công chuyên môn và định mức tiết dạy theo quy định.",
    "output": "Lịch giảng dạy / Sổ đầu bài",
    "sourceDue": "Hằng tuần",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.0,
    "max": 10.0,
    "evidence": "Sổ đầu bài, TKB",
    "source": "GVBM!B6"
  },
  {
    "id": "GVBM-4",
    "role": "GVBM",
    "title": "Tổ chức kiểm tra, đánh giá thường xuyên, định kỳ và cập nhật điểm số, nhận xét học sinh",
    "output": "Bảng điểm môn học và học bạ điện tử",
    "sourceDue": "Theo lịch",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.0,
    "max": 10.0,
    "evidence": "Dữ liệu điểm số đồng bộ trên VnEdu",
    "source": "GVBM!B7"
  },
  {
    "id": "GVBM-5",
    "role": "GVBM",
    "title": "6. Xây dựng đề, đáp án, hướng dẫn chấm và thực hiện kiểm tra, đánh giá kết quả học tập, sự tiến bộ của học sinh theo phân công và quy định.",
    "output": "Đề kiểm tra, đáp án, ma trận",
    "sourceDue": "2026-09-30",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.1,
    "max": 11.0,
    "evidence": "Hồ sơ đề thi, đáp án",
    "source": "GVBM!B8"
  },
  {
    "id": "GVBM-6",
    "role": "GVBM",
    "title": "Phân tích kết quả học tập và sự tiến bộ của học sinh theo từng giai đoạn; xác định những nội dung cần điều chỉnh và đề xuất biện pháp nâng cao chất lượng dạy học.",
    "output": "Báo cáo phân tích chất lượng",
    "sourceDue": "2026-09-30",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.1,
    "max": 11.0,
    "evidence": "Báo cáo chuyên môn",
    "source": "GVBM!B9"
  },
  {
    "id": "GVBM-7",
    "role": "GVBM",
    "title": "Thực hiện phụ đạo, hỗ trợ học sinh chưa đạt yêu cầu theo kế hoạch; bồi dưỡng học sinh giỏi, hướng dẫn nghiên cứu khoa học hoặc tham gia các kỳ thi khi được phân công.",
    "output": "Kế hoạch & Danh sách HS",
    "sourceDue": "2026-09-30",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.2,
    "max": 12.0,
    "evidence": "Hồ sơ phụ đạo, bồi dưỡng HSG",
    "source": "GVBM!B10"
  },
  {
    "id": "GVBM-8",
    "role": "GVBM",
    "title": "Thực hiện giáo dục hòa nhập đối với học sinh thuộc phạm vi được giao; phối hợp thực hiện các biện pháp hỗ trợ phù hợp với từng đối tượng học sinh.",
    "output": "Kế hoạch giáo dục cá nhân hóa",
    "sourceDue": "2026-09-30",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.2,
    "max": 12.0,
    "evidence": "Hồ sơ theo dõi HS hòa nhập",
    "source": "GVBM!B11"
  },
  {
    "id": "GVBM-9",
    "role": "GVBM",
    "title": "Tham gia đầy đủ sinh hoạt tổ, nhóm chuyên môn, nghiên cứu bài học, chuyên đề, dự giờ, thao giảng và các hoạt động phát triển chuyên môn theo kế hoạch.",
    "output": "Biên bản sinh hoạt tổ/nhóm",
    "sourceDue": "Hằng tháng",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.0,
    "max": 10.0,
    "evidence": "Biên bản họp tổ chuyên môn",
    "source": "GVBM!B12"
  },
  {
    "id": "GVBM-10",
    "role": "GVBM",
    "title": "Tham gia đào tạo, bồi dưỡng, tự bồi dưỡng chuyên môn, nghiệp vụ và thực hiện các yêu cầu về phát triển năng lực nghề nghiệp giáo viên.",
    "output": "Chứng nhận / Báo cáo",
    "sourceDue": "2026-09-30",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.0,
    "max": 10.0,
    "evidence": "Chứng chỉ, giấy chứng nhận",
    "source": "GVBM!B13"
  },
  {
    "id": "GVBM-11",
    "role": "GVBM",
    "title": "Ứng dụng công nghệ thông tin, chuyển đổi số, học liệu số, thiết bị và các phương tiện dạy học phù hợp trong quá trình giảng dạy.",
    "output": "Bài giảng điện tử / Học liệu số",
    "sourceDue": "Hằng tháng",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.2,
    "max": 12.0,
    "evidence": "Kho học liệu số, LMS",
    "source": "GVBM!B14"
  },
  {
    "id": "GVBM-12",
    "role": "GVBM",
    "title": "Chủ động đổi mới phương pháp, hình thức tổ chức dạy học, kiểm tra đánh giá và khai thác hiệu quả các nguồn học liệu phục vụ dạy học.",
    "output": "Sản phẩm đổi mới PPDH",
    "sourceDue": "2026-09-30",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.2,
    "max": 12.0,
    "evidence": "Báo cáo chuyên đề, sáng kiến",
    "source": "GVBM!B15"
  },
  {
    "id": "GVBM-13",
    "role": "GVBM",
    "title": "Tham gia các hoạt động giáo dục, hoặc các nhiệm vụ khác khi được Hiệu trưởng, Phó Hiệu trưởng  phân công.",
    "output": "Báo cáo kết quả / Kế hoạch",
    "sourceDue": "Theo phân công",
    "kind": "Đột xuất",
    "base": 12,
    "coef": 1.1,
    "max": 13.2,
    "evidence": "Minh chứng phân công",
    "source": "GVBM!B16"
  },
  {
    "id": "GVBM-14",
    "role": "GVBM",
    "title": "Tham gia các hoạt động giáo dục, hoặc các nhiệm vụ chuyên môn khác khi được Sở Giáo dục phân công.",
    "output": "Biên bản kiểm tra / Báo cáo",
    "sourceDue": "Theo phân công",
    "kind": "Đột xuất",
    "base": 12,
    "coef": 1.1,
    "max": 13.2,
    "evidence": "QĐ/Hồ sơ thực hiện nhiệm vụ",
    "source": "GVBM!B17"
  },
  {
    "id": "GVCN-1",
    "role": "GVCN",
    "title": "Xây dựng và thực hiện kế hoạch công tác chủ nhiệm, kế hoạch giáo dục của lớp phù hợp với kế hoạch giáo dục nhà trường.",
    "output": "Kế hoạch công tác chủ nhiệm",
    "sourceDue": "2026-08-30",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.0,
    "max": 10.0,
    "evidence": "Văn bản ban hành và hồ sơ trình",
    "source": "GVCN!B4"
  },
  {
    "id": "GVCN-2",
    "role": "GVCN",
    "title": "Nắm bắt, cập nhật và quản lý đầy đủ, chính xác thông tin về học sinh thuộc lớp chủ nhiệm; kịp thời phát hiện những vấn đề cần quan tâm, hỗ trợ.",
    "output": "Hồ sơ thông tin học sinh",
    "sourceDue": "2026-08-30",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.0,
    "max": 10.0,
    "evidence": "Sổ chủ nhiệm / CSDL học sinh",
    "source": "GVCN!B5"
  },
  {
    "id": "GVCN-3",
    "role": "GVCN",
    "title": "Theo dõi thường xuyên tình hình chuyên cần, học tập, rèn luyện, ý thức chấp hành nội quy và sự tiến bộ của từng học sinh.",
    "output": "Sổ theo dõi chuyên cần",
    "sourceDue": "Hằng tuần",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.0,
    "max": 10.0,
    "evidence": "Sổ đầu bài / Sổ điểm danh",
    "source": "GVCN!B6"
  },
  {
    "id": "GVCN-4",
    "role": "GVCN",
    "title": "Tổ chức tiết sinh hoạt lớp và các hoạt động giáo dục tập thể theo kế hoạch; xây dựng tập thể lớp đoàn kết, tích cực, tự quản và có ý thức trách nhiệm.",
    "output": "Biên bản sinh hoạt lớp",
    "sourceDue": "Hằng tuần",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.1,
    "max": 11.0,
    "evidence": "Giáo án HĐTN-HN / Sổ chủ nhiệm",
    "source": "GVCN!B7"
  },
  {
    "id": "GVCN-5",
    "role": "GVCN",
    "title": "Hướng dẫn ban cán sự lớp tổ chức, điều hành và quản lý các hoạt động của lớp; phát huy vai trò tự quản của học sinh.",
    "output": "Sổ tay cán sự lớp",
    "sourceDue": "Hằng tháng",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.0,
    "max": 10.0,
    "evidence": "Sổ phân công nhiệm vụ lớp",
    "source": "GVCN!B8"
  },
  {
    "id": "GVCN-6",
    "role": "GVCN",
    "title": "Tư vấn, hỗ trợ ban đầu đối với học sinh gặp khó khăn trong học tập, tâm lý, quan hệ xã hội; phối hợp với nhà trường, cha mẹ học sinh và các lực lượng có liên quan khi cần thiết.",
    "output": "Nhật ký tư vấn tâm lý",
    "sourceDue": "Hằng tháng",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.1,
    "max": 11.0,
    "evidence": "Biên bản tư vấn / Sổ theo dõi",
    "source": "GVCN!B9"
  },
  {
    "id": "GVCN-7",
    "role": "GVCN",
    "title": "Chủ động thực hiện các biện pháp hỗ trợ đối với học sinh có nguy cơ bỏ học, vi phạm nội quy, sa sút trong học tập hoặc rèn luyện; theo dõi kết quả và báo cáo nhà trường theo quy định.",
    "output": "Hồ sơ hỗ trợ HS cá biệt",
    "sourceDue": "2026-09-30",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.2,
    "max": 12.0,
    "evidence": "Biên bản làm việc với PHHS, BGH",
    "source": "GVCN!B10"
  },
  {
    "id": "GVCN-8",
    "role": "GVCN",
    "title": "Phối hợp với giáo viên bộ môn trong theo dõi, quản lý, giáo dục và hỗ trợ học sinh; trao đổi kịp thời những vấn đề phát sinh liên quan đến học sinh.",
    "output": "Biên bản phối hợp GVBM",
    "sourceDue": "Hằng tháng",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.1,
    "max": 11.0,
    "evidence": "Sổ ghi chép / Sổ liên lạc",
    "source": "GVCN!B11"
  },
  {
    "id": "GVCN-9",
    "role": "GVCN",
    "title": "Phối hợp, trao đổi thường xuyên với cha mẹ học sinh về tình hình học tập, rèn luyện, chuyên cần và những vấn đề cần phối hợp giáo dục học sinh.",
    "output": "Sổ liên lạc PHHS",
    "sourceDue": "Hằng tuần",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.1,
    "max": 11.0,
    "evidence": "Nhật ký trao đổi, ứng dụng SLLĐT",
    "source": "GVCN!B12"
  },
  {
    "id": "GVCN-10",
    "role": "GVCN",
    "title": "Tổ chức họp cha mẹ học sinh theo kế hoạch của nhà trường; thực hiện đầy đủ nội dung, bảo đảm đúng quy định và hiệu quả phối hợp giáo dục.",
    "output": "Biên bản họp PHHS",
    "sourceDue": "2026-09-30",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.1,
    "max": 11.0,
    "evidence": "Biên bản họp, danh sách điểm danh",
    "source": "GVCN!B13"
  },
  {
    "id": "GVCN-11",
    "role": "GVCN",
    "title": "Hướng dẫn, quản lý học sinh tham gia hoạt động trải nghiệm, hướng nghiệp và các hoạt động giáo dục khác theo kế hoạch của nhà trường.",
    "output": "Báo cáo hoạt động trải nghiệm",
    "sourceDue": "Hằng tháng",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.1,
    "max": 11.0,
    "evidence": "Kế hoạch, Hình ảnh minh chứng",
    "source": "GVCN!B14"
  },
  {
    "id": "GVCN-12",
    "role": "GVCN",
    "title": "Tổng hợp thông tin, nhận xét và thực hiện đánh giá kết quả rèn luyện của học sinh cuối học kỳ, cuối năm học theo quy định; bảo đảm khách quan, chính xác và đúng thời hạn.",
    "output": "Kết quả đánh giá rèn luyện",
    "sourceDue": "2026-09-30",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.0,
    "max": 10.0,
    "evidence": "Bảng tổng hợp xếp loại trên vnedu",
    "source": "GVCN!B15"
  },
  {
    "id": "GVCN-13",
    "role": "GVCN",
    "title": "Hướng dẫn học sinh thực hiện quy trình bình xét, đề nghị khen thưởng; tổng hợp và báo cáo kết quả theo quy định của nhà trường.",
    "output": "Biên bản xét khen thưởng",
    "sourceDue": "2026-09-30",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.0,
    "max": 10.0,
    "evidence": "Hồ sơ đề nghị khen thưởng",
    "source": "GVCN!B16"
  },
  {
    "id": "GVCN-14",
    "role": "GVCN",
    "title": "Tổng hợp, lập danh sách và đề xuất việc lên lớp, không lên lớp, rèn luyện trong kỳ nghỉ hè và các nội dung liên quan đến kết quả giáo dục học sinh theo quy định.",
    "output": "Danh sách xét duyệt",
    "sourceDue": "2026-09-30",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.0,
    "max": 10.0,
    "evidence": "Biên bản họp xét duyệt cuối năm/hè",
    "source": "GVCN!B17"
  },
  {
    "id": "GVCN-15",
    "role": "GVCN",
    "title": "Cập nhật, hoàn thiện học bạ và hồ sơ học sinh của lớp chủ nhiệm đầy đủ, chính xác, đúng thời hạn; thực hiện quản lý, bảo quản thông tin, hồ sơ học sinh theo quy định.",
    "output": "Học bạ học sinh",
    "sourceDue": "2026-09-30",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.0,
    "max": 10.0,
    "evidence": "Hồ sơ học bạ hoàn thiện",
    "source": "GVCN!B18"
  },
  {
    "id": "GVCN-16",
    "role": "GVCN",
    "title": "Thực hiện đầy đủ, chính xác và đúng thời hạn các báo cáo định kỳ, đột xuất về tình hình lớp, học sinh và công tác chủ nhiệm theo yêu cầu của nhà trường.",
    "output": "Báo cáo tổng hợp/đột xuất",
    "sourceDue": "2026-09-30",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.0,
    "max": 10.0,
    "evidence": "Văn bản báo cáo / Biểu mẫu",
    "source": "GVCN!B19"
  },
  {
    "id": "TTCM-1",
    "role": "TTCM",
    "title": "Tham gia xây dựng kế hoạch giáo dục của nhà trường theo lĩnh vực chuyên môn được phân công.",
    "output": "Kế hoạch giáo dục nhà trường",
    "sourceDue": "2026-08-30",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.2,
    "max": 12.0,
    "evidence": "Văn bản Kế hoạch trường",
    "source": "TTCM!B4"
  },
  {
    "id": "TTCM-2",
    "role": "TTCM",
    "title": "Xây dựng và tổ chức thực hiện kế hoạch giáo dục của tổ chuyên môn; chịu trách nhiệm về tiến độ, chất lượng và hiệu quả thực hiện kế hoạch của tổ.",
    "output": "Kế hoạch tổ chuyên môn",
    "sourceDue": "2026-08-30",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.2,
    "max": 12.0,
    "evidence": "Kế hoạch tổ được duyệt",
    "source": "TTCM!B5"
  },
  {
    "id": "TTCM-3",
    "role": "TTCM",
    "title": "Tham mưu, đề xuất với Hiệu trưởng việc phân công giáo viên giảng dạy, làm công tác chủ nhiệm và thực hiện các nhiệm vụ chuyên môn khác phù hợp với năng lực, chuyên môn và yêu cầu của nhà trường.",
    "output": "Phiếu/Văn bản đề xuất",
    "sourceDue": "2026-08-30",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.1,
    "max": 11.0,
    "evidence": "Tờ trình đề xuất BGH",
    "source": "TTCM!B6"
  },
  {
    "id": "TTCM-4",
    "role": "TTCM",
    "title": "Đề xuất lựa chọn, sử dụng tài liệu giáo dục, học liệu và xuất bản phẩm tham khảo phục vụ hoạt động dạy học theo quy định.",
    "output": "Danh mục tài liệu đề xuất",
    "sourceDue": "2026-08-30",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.1,
    "max": 11.0,
    "evidence": "Biên bản họp tổ đề xuất",
    "source": "TTCM!B7"
  },
  {
    "id": "TTCM-5",
    "role": "TTCM",
    "title": "Hướng dẫn thành viên xây dựng, thực hiện và điều chỉnh kế hoạch giáo dục môn học, kế hoạch bài dạy và các nhiệm vụ chuyên môn theo yêu cầu.",
    "output": "Biên bản / Hướng dẫn",
    "sourceDue": "Hằng tháng",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.1,
    "max": 11.0,
    "evidence": "Biên bản sinh hoạt chuyên môn",
    "source": "TTCM!B8"
  },
  {
    "id": "TTCM-6",
    "role": "TTCM",
    "title": "Tổ chức sinh hoạt tổ chuyên môn theo quy định; sinh hoạt chuyên môn theo NCBH bảo đảm nội dung sinh hoạt thiết thực, hiệu quả và gắn với nâng cao chất lượng dạy học.",
    "output": "Biên bản họp tổ",
    "sourceDue": "Hằng tháng",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.1,
    "max": 11.0,
    "evidence": "Sổ biên bản sinh hoạt tổ",
    "source": "TTCM!B9"
  },
  {
    "id": "TTCM-7",
    "role": "TTCM",
    "title": "Tổ chức hội giảng, chuyên đề đổi mới phương pháp dạy học, ứng dụng công nghệ số cấp tổ/trường",
    "output": "Kế hoạch & Báo cáo kết quả chuyên đề",
    "sourceDue": "Theo lịch",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.1,
    "max": 11.0,
    "evidence": "Kế hoạch, Biên bản dự giờ",
    "source": "TTCM!B10"
  },
  {
    "id": "TTCM-8",
    "role": "TTCM",
    "title": "Theo dõi, đôn đốc tiến độ thực hiện chương trình, kế hoạch giáo dục và các nhiệm vụ chuyên môn của thành viên trong tổ; kịp thời báo cáo, đề xuất xử lý những vấn đề phát sinh.",
    "output": "Báo cáo tiến độ",
    "sourceDue": "Hằng tuần/tháng",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.1,
    "max": 11.0,
    "evidence": "Nhật ký tổ trưởng, Sổ theo dõi",
    "source": "TTCM!B11"
  },
  {
    "id": "TTCM-9",
    "role": "TTCM",
    "title": "Kiểm tra hồ sơ, sản phẩm chuyên môn của thành viên theo kế hoạch; hướng dẫn khắc phục những hạn chế và theo dõi kết quả thực hiện.",
    "output": "Biên bản kiểm tra hồ sơ",
    "sourceDue": "Hằng tháng",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.1,
    "max": 11.0,
    "evidence": "Biên bản kiểm tra HSSS GV",
    "source": "TTCM!B12"
  },
  {
    "id": "TTCM-10",
    "role": "TTCM",
    "title": "Phân tích kết quả giáo dục của tổ, xác định những vấn đề cần cải thiện và đề xuất giải pháp nâng cao chất lượng dạy học.",
    "output": "Báo cáo phân tích chất lượng",
    "sourceDue": "2026-09-30",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.2,
    "max": 12.0,
    "evidence": "Báo cáo thống kê, phân tích",
    "source": "TTCM!B13"
  },
  {
    "id": "TTCM-11",
    "role": "TTCM",
    "title": "Tham mưu đánh giá, xếp loại thi đua viên chức định kỳ quý/năm đối với giáo viên trong tổ",
    "output": "Bảng đánh giá và phiếu nhận xét",
    "sourceDue": "2026-09-30",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.1,
    "max": 11.0,
    "evidence": "Bảng đánh giá và phiếu nhận xét",
    "source": "TTCM!B14"
  },
  {
    "id": "TTCM-12",
    "role": "TTCM",
    "title": "Quản lý, cập nhật và lưu trữ hồ sơ, dữ liệu và minh chứng hoạt động của tổ chuyên môn theo quy định.",
    "output": "Hồ sơ tổ chuyên môn",
    "sourceDue": "2026-09-30",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.0,
    "max": 10.0,
    "evidence": "Hệ thống hồ sơ sổ sách tổ",
    "source": "TTCM!B15"
  },
  {
    "id": "TTCM-13",
    "role": "TTCM",
    "title": "Thực hiện báo cáo định kỳ, sơ kết, tổng kết và các báo cáo đột xuất về hoạt động của tổ chuyên môn theo yêu cầu của Hiệu trưởng.",
    "output": "Báo cáo chuyên môn tổ",
    "sourceDue": "2026-09-30",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.0,
    "max": 10.0,
    "evidence": "Báo cáo nộp BGH",
    "source": "TTCM!B16"
  },
  {
    "id": "TPCM-1",
    "role": "TPCM",
    "title": "Tham gia xây dựng và thực hiện kế hoạch giáo dục của tổ chuyên môn theo lĩnh vực, nhiệm vụ được phân công.",
    "output": "Kế hoạch giáo dục",
    "sourceDue": "2026-08-30",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.1,
    "max": 11.0,
    "evidence": "Bản thảo góp ý/Kế hoạch ban hành",
    "source": "TPCM!B4"
  },
  {
    "id": "TPCM-2",
    "role": "TPCM",
    "title": "Tổ chức triển khai các nhiệm vụ chuyên môn được Tổ trưởng phân công; phối hợp với các thành viên trong tổ để bảo đảm tiến độ và chất lượng thực hiện.",
    "output": "Kế hoạch triển khai",
    "sourceDue": "Hằng tháng",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.1,
    "max": 11.0,
    "evidence": "Báo cáo tiến độ/Biên bản phối hợp",
    "source": "TPCM!B5"
  },
  {
    "id": "TPCM-3",
    "role": "TPCM",
    "title": "Theo dõi tiến độ thực hiện chương trình, kế hoạch giáo dục và kết quả giáo dục của môn học, lĩnh vực chuyên môn được phân công; kịp thời báo cáo Tổ trưởng những vấn đề phát sinh.",
    "output": "Báo cáo tiến độ",
    "sourceDue": "Hằng tuần",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.1,
    "max": 11.0,
    "evidence": "Sổ theo dõi/Nhật ký tổ phó",
    "source": "TPCM!B6"
  },
  {
    "id": "TPCM-4",
    "role": "TPCM",
    "title": "Hỗ trợ, hướng dẫn thành viên trong tổ xây dựng, thực hiện và điều chỉnh kế hoạch giáo dục môn học, kế hoạch bài dạy và các nhiệm vụ chuyên môn theo yêu cầu.",
    "output": "Biên bản hướng dẫn",
    "sourceDue": "Hằng tháng",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.1,
    "max": 11.0,
    "evidence": "Biên bản sinh hoạt/Sổ ghi chép",
    "source": "TPCM!B7"
  },
  {
    "id": "TPCM-5",
    "role": "TPCM",
    "title": "Chuẩn bị nội dung sinh hoạt tổ chuyên môn, chuyên đề, nghiên cứu bài học và các hoạt động chuyên môn khác theo phân công của Tổ trưởng.",
    "output": "Tài liệu chuyên đề",
    "sourceDue": "Hằng tháng",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.1,
    "max": 11.0,
    "evidence": "Hồ sơ sinh hoạt chuyên môn",
    "source": "TPCM!B8"
  },
  {
    "id": "TPCM-6",
    "role": "TPCM",
    "title": "Tham gia kiểm tra hồ sơ, sản phẩm chuyên môn của thành viên theo phân công; tổng hợp những nội dung cần điều chỉnh và báo cáo Tổ trưởng để chỉ đạo thực hiện.",
    "output": "Biên bản kiểm tra",
    "sourceDue": "Hằng tháng",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.1,
    "max": 11.0,
    "evidence": "Phiếu/Biên bản kiểm tra HSSS",
    "source": "TPCM!B9"
  },
  {
    "id": "TPCM-7",
    "role": "TPCM",
    "title": "Tổng hợp số liệu, hồ sơ, minh chứng và kết quả thực hiện các nhiệm vụ chuyên môn thuộc lĩnh vực được phân công; phục vụ công tác đánh giá, sơ kết, tổng kết và báo cáo của tổ.",
    "output": "Bảng tổng hợp dữ liệu",
    "sourceDue": "2026-09-30",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.0,
    "max": 10.0,
    "evidence": "Báo cáo/Biểu mẫu thống kê",
    "source": "TPCM!B10"
  },
  {
    "id": "TPCM-8",
    "role": "TPCM",
    "title": "Điều hành hoạt động của tổ chuyên môn hoặc các hoạt động chuyên môn cụ thể khi được Tổ trưởng phân công hoặc ủy quyền; bảo đảm hoạt động được thực hiện đúng kế hoạch và quy định.",
    "output": "Biên bản điều hành",
    "sourceDue": "Theo phân công",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.1,
    "max": 11.0,
    "evidence": "Biên bản họp do tổ phó chủ trì",
    "source": "TPCM!B11"
  },
  {
    "id": "TPCM-9",
    "role": "TPCM",
    "title": "Báo cáo Tổ trưởng về tiến độ, kết quả thực hiện nhiệm vụ được giao; đề xuất giải pháp xử lý những khó khăn, vướng mắc trong quá trình thực hiện.",
    "output": "Báo cáo công tác",
    "sourceDue": "2026-09-30",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.0,
    "max": 10.0,
    "evidence": "Báo cáo định kỳ nộp Tổ trưởng",
    "source": "TPCM!B12"
  },
  {
    "id": "HOANHAP-1",
    "role": "HOANHAP",
    "title": "Tham gia xây dựng và thực hiện kế hoạch giáo dục cá nhân đối với học sinh hòa nhập theo hồ sơ, nhu cầu, khả năng của học sinh và sự hướng dẫn của nhà trường.",
    "output": "Kế hoạch GD cá nhân",
    "sourceDue": "2026-08-30",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.2,
    "max": 12.0,
    "evidence": "Hồ sơ kế hoạch giáo dục cá nhân được duyệt",
    "source": "HOA NHAP!B4"
  },
  {
    "id": "HOANHAP-2",
    "role": "HOANHAP",
    "title": "Hỗ trợ học sinh hòa nhập trong học tập và tham gia các hoạt động giáo dục theo kế hoạch giáo dục cá nhân và nhiệm vụ được phân công; tạo điều kiện để học sinh tham gia phù hợp với khả năng.",
    "output": "Nhật ký hỗ trợ HS",
    "sourceDue": "Hằng tuần",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.1,
    "max": 11.0,
    "evidence": "Sổ theo dõi/Nhật ký hỗ trợ học sinh",
    "source": "HOA NHAP!B5"
  },
  {
    "id": "HOANHAP-3",
    "role": "HOANHAP",
    "title": "Phối hợp với giáo viên bộ môn, giáo viên chủ nhiệm và các bộ phận có liên quan trong việc điều chỉnh cách thức hỗ trợ, phương pháp, hình thức tổ chức hoạt động giáo dục phù hợp với nhu cầu của học sinh.",
    "output": "Biên bản điều chỉnh phương pháp",
    "sourceDue": "Hằng tháng",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.1,
    "max": 11.0,
    "evidence": "Biên bản sinh hoạt chuyên môn / Góp ý",
    "source": "HOA NHAP!B6"
  },
  {
    "id": "HOANHAP-4",
    "role": "HOANHAP",
    "title": "Theo dõi, ghi nhận và báo cáo sự tiến bộ của học sinh về học tập, khả năng tham gia hoạt động giáo dục và các kỹ năng cần hỗ trợ; kịp thời thông tin những khó khăn phát sinh.",
    "output": "Báo cáo tiến độ học sinh",
    "sourceDue": "Hằng tháng",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.1,
    "max": 11.0,
    "evidence": "Sổ theo dõi sự tiến bộ / Báo cáo định kỳ",
    "source": "HOA NHAP!B7"
  },
  {
    "id": "HOANHAP-5",
    "role": "HOANHAP",
    "title": "Phối hợp với cha mẹ học sinh và cơ quan, đơn vị, cá nhân có chuyên môn liên quan trong quá trình hỗ trợ học sinh theo kế hoạch và sự chỉ đạo của nhà trường.",
    "output": "Biên bản làm việc với PHHS",
    "sourceDue": "Khi phát sinh",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.1,
    "max": 11.0,
    "evidence": "Biên bản phối hợp gia đình - nhà trường",
    "source": "HOA NHAP!B8"
  },
  {
    "id": "HOANHAP-6",
    "role": "HOANHAP",
    "title": "Quản lý, cập nhật và bảo mật hồ sơ, thông tin liên quan đến quá trình hỗ trợ học sinh theo quy định; bảo đảm thông tin được sử dụng đúng mục đích.",
    "output": "Hệ thống hồ sơ bảo mật",
    "sourceDue": "Hằng tuần",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.0,
    "max": 10.0,
    "evidence": "Tủ lưu trữ hồ sơ / Minh chứng bảo mật",
    "source": "HOA NHAP!B9"
  },
  {
    "id": "HOANHAP-7",
    "role": "HOANHAP",
    "title": "Tổng hợp, báo cáo kết quả thực hiện kế hoạch hỗ trợ và đề xuất điều chỉnh biện pháp hỗ trợ khi cần thiết; thực hiện các nhiệm vụ khác theo phân công của Hiệu trưởng.",
    "output": "Báo cáo tổng kết hỗ trợ",
    "sourceDue": "2026-09-30",
    "kind": "Thường xuyên",
    "base": 10,
    "coef": 1.1,
    "max": 11.0,
    "evidence": "Văn bản báo cáo tổng kết nộp Ban Giám hiệu",
    "source": "HOA NHAP!B10"
  }
];


/** Standalone bound Apps Script for the KPI spreadsheet. Do NOT replace attendance Code.gs. */
const KPI_VERSION='3.0.0-supabase';
const KPI_HEADERS={
 kpi_cong_viec:['id','email','period','criterionId','title','role','output','due','kind','base','coef','inPlan','planStatus','planAt','progress','quality','completed','completedAt','note','fileId','fileName','reviewStatus','submittedAt','reviewer','reviewedAt','version','cancelled'],
 kpi_chung:['id','email','period','scores','note','status','reviewer','updatedAt'],
 kpi_thuong:['id','email','period','taskId','category','reference','requested','approved','status','reviewer','updatedAt'],
 kpi_nhat_ky:['at','actor','action','entity','before','after'],
 kpi_cau_hinh:['key','value'],
 kpi_xep_loai:['id','email','period','rating','reference','note','decider','updatedAt'],
 kpi_ket_qua:['email','period','A','B','KPI','Chung','Thuong','Tong','SoViec','HoanThanh','Vuot','DuDieuKienXS'],
 bang_luong_hoa_kpi:['id','role','title','output','sourceDue','kind','base','coef','max','evidence','source']
};
function kpiSS_(){const id=PropertiesService.getScriptProperties().getProperty('KPI_SPREADSHEET_ID');return id?SpreadsheetApp.openById(id):SpreadsheetApp.getActiveSpreadsheet();}
function kpiSheet_(name){const s=kpiSS_().getSheetByName(name);if(!s)throw Error('Chưa có sheet '+name+'. Chạy initializeKpiSystem.');return s;}
function kpiRawRows_(name){const s=kpiSheet_(name),v=s.getDataRange().getValues();const h=v.shift().map(String);return v.map((r,i)=>{const o={_row:i+2};h.forEach((k,j)=>o[k]=r[j] instanceof Date?r[j].toISOString():r[j]);return o;}).filter(o=>Object.keys(o).some(k=>k!=='_row'&&o[k]!==''));}
function kpiWrite_(name,o){if(KPI_READ_CACHE)delete KPI_READ_CACHE[name];KPI_INDEX_CACHE={};if(name==='gvcnv')KPI_PEOPLE_CACHE=null;const s=kpiSheet_(name),h=s.getRange(1,1,1,s.getLastColumn()).getValues()[0];const row=h.map(k=>o[k]===undefined?'':(typeof o[k]==='object'?JSON.stringify(o[k]):o[k]));s.getRange(o._row||s.getLastRow()+1,1,1,h.length).setValues([row.map(v=>typeof v==='string'&&v.startsWith('=')?"'"+v:v)]);}
function kpiLocked_(fn){const l=LockService.getScriptLock();l.waitLock(30000);try{return fn();}finally{l.releaseLock();}}
function kpiAudit_(u,action,id,before,after){kpiWrite_('kpi_nhat_ky',{at:new Date().toISOString(),actor:u.email,action,entity:id,before:JSON.stringify(before||{}),after:JSON.stringify(after||{})});}
function initializeKpiSystem(){
 const ss=kpiSS_();if(!ss)throw Error('Gắn script vào Google Sheet hoặc đặt KPI_SPREADSHEET_ID.');
 return kpiLocked_(()=>{
 Object.keys(KPI_HEADERS).forEach(n=>{const s=ss.getSheetByName(n)||ss.insertSheet(n),h=KPI_HEADERS[n];if(s.getMaxColumns()<h.length)s.insertColumnsAfter(s.getMaxColumns(),h.length-s.getMaxColumns());if(s.getLastRow()===0)s.appendRow(h);else if(s.getRange(1,1,1,h.length).getValues()[0].join('|')!==h.join('|'))throw Error('Cấu trúc '+n+' khác phiên bản, không tự ghi đè.');s.setFrozenRows(1);s.getRange(1,1,1,h.length).setBackground('#145b46').setFontColor('#fff').setFontWeight('bold');});
 const gv=ss.getSheetByName('gvcnv');if(!gv)throw Error('Thiếu gvcnv. Giữ danh sách nhân sự hiện có.');
 const headers=gv.getRange(1,1,1,gv.getLastColumn()).getValues()[0];['Tổ','Nhóm nhiệm vụ tương đồng','Lớp chủ nhiệm','Hòa nhập','Vai trò KPI','Mật khẩu hash','Salt KPI','Phiên bản mật khẩu'].forEach(h=>{if(!headers.includes(h)){headers.push(h);gv.getRange(1,headers.length).setValue(h);}});
 if(kpiRows_('bang_luong_hoa_kpi').length===0)KPI_CATALOG.forEach(c=>kpiWrite_('bang_luong_hoa_kpi',c));
 const config=kpiRows_('kpi_cau_hinh');[{key:'period',value:'2026-2027'},{key:'schoolRule',value:'DỰ THẢO – tham khảo CV 9421/SGDĐT-TCCB TP.HCM quý III/2026; chờ quy chế nhà trường áp dụng năm học tại Đồng Nai'},{key:'bonusMode',value:'source'},{key:'autoTimeout',value:'false'},{key:'driveFolderId',value:''}].forEach(c=>{if(!config.some(x=>x.key===c.key))kpiWrite_('kpi_cau_hinh',c);});
 const p=PropertiesService.getScriptProperties();if(!p.getProperty('KPI_PEPPER'))p.setProperty('KPI_PEPPER',Utilities.getUuid()+Utilities.getUuid());
 return 'Đã bổ sung sheet KPI. Không thay đổi các sheet cũ hoặc mật khẩu hiện có.';
 });
}
function kpiCfg_(){return Object.fromEntries(kpiRows_('kpi_cau_hinh').map(r=>[r.key,String(r.value)]));}
function kpiNorm_(v){return String(v||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();}
function kpiPick_(o,keys){for(const k of keys){const found=Object.keys(o).find(h=>kpiNorm_(h)===kpiNorm_(k));if(found&&o[found]!=='')return o[found];}return '';}
function kpiLegacyPeople_(){return kpiRows_('gvcnv').map(r=>{
 const raw=String(kpiPick_(r,['Vai trò KPI'])),job=kpiNorm_(kpiPick_(r,['Chức vụ']));
 let roles=raw?raw.toUpperCase().split(/[;,|\s]+/).filter(Boolean):[];
 if(!roles.length){if(job.includes('pho hieu truong'))roles=['PHT'];else if(job.includes('hieu truong'))roles=['HT'];else if(job.includes('to truong')||job==='ttcm')roles=['GVBM','TTCM'];else if(job.includes('to pho')||job==='tpcm')roles=['GVBM','TPCM'];else if(job.includes('to vien')||job.includes('giao vien')||job.includes('gvbm'))roles=['GVBM'];}
 if(kpiPick_(r,['Lớp chủ nhiệm','GVCN'])||job.includes('gvcn'))roles.push('GVCN');
 if(['co','true','1','x'].includes(kpiNorm_(kpiPick_(r,['Hòa nhập'])))||job.includes('hoa nhap'))roles.push('HOANHAP');
 return {_row:r._row,email:String(kpiPick_(r,['Email'])).trim().toLowerCase(),name:String(kpiPick_(r,['Họ và tên','Họ tên'])),unit:String(kpiPick_(r,['Tổ','Tổ chuyên môn'])||kpiPick_(r,['Môn'])),roles:[...new Set(roles)],group:String(kpiPick_(r,['Nhóm nhiệm vụ tương đồng'])),raw:r,version:Number(kpiPick_(r,['Phiên bản mật khẩu']))||0};
 }).filter(u=>u.email);}
function kpiPublicUser_(u){return {email:u.email,name:u.name,unit:u.unit,roles:u.roles,group:u.group};}
function kpiSha_(s){return Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256,s,Utilities.Charset.UTF_8).map(b=>('0'+((b+256)%256).toString(16)).slice(-2)).join('');}
function kpiStoredHash_(digest,salt){return Utilities.computeHmacSha256Signature(salt+':'+digest,PropertiesService.getScriptProperties().getProperty('KPI_PEPPER')).map(b=>('0'+((b+256)%256).toString(16)).slice(-2)).join('');}
function kpiSetPerson_(u,patch){if(KPI_READ_CACHE)delete KPI_READ_CACHE.gvcnv;KPI_INDEX_CACHE={};KPI_PEOPLE_CACHE=null;const s=kpiSheet_('gvcnv'),h=s.getRange(1,1,1,s.getLastColumn()).getValues()[0];Object.keys(patch).forEach(k=>{const col=h.indexOf(k)+1;if(!col)throw Error('Chạy initializeKpiSystem để thêm '+k);s.getRange(u._row,col).setValue(patch[k]);});}
function kpiAuth_(token){const saved=CacheService.getScriptCache().get('kpi-session-'+token);if(!saved)throw Error('Phiên đã hết hạn. Đăng nhập lại.');const session=JSON.parse(saved),u=kpiPeople_().find(x=>x.email===session.email);if(!u||u.version!==session.version)throw Error('Phiên không còn hợp lệ.');return u;}
function kpiLogin_(email,digest){
 email=String(email).trim().toLowerCase();if(!/^[a-f0-9]{64}$/.test(String(digest)))throw Error('Thông tin đăng nhập không hợp lệ.');
 const cache=CacheService.getScriptCache(),failKey='kpi-fail-'+kpiSha_(email),failed=Number(cache.get(failKey)||0);if(failed>=8)throw Error('Thử lại sau 15 phút.');
 const matches=kpiPeople_().filter(u=>u.email===email);const u=matches.length===1?matches[0]:null;
 const salt=u?String(kpiPick_(u.raw,['Salt KPI'])):'',stored=u?String(kpiPick_(u.raw,['Mật khẩu hash'])):'';
 const legacy=u?String(kpiPick_(u.raw,['Mật khẩu'])):'';
 const valid=u&&(stored?kpiStoredHash_(digest,salt)===stored:legacy&&kpiSha_(legacy)===digest);
 if(!valid){cache.put(failKey,String(failed+1),900);throw Error('Email hoặc mật khẩu không chính xác.');}
 cache.remove(failKey);
 if(!stored){const newSalt=Utilities.getUuid();kpiSetPerson_(u,{'Salt KPI':newSalt,'Mật khẩu hash':kpiStoredHash_(digest,newSalt),'Mật khẩu':''});}
 const token=Utilities.getUuid()+Utilities.getUuid();cache.put('kpi-session-'+token,JSON.stringify({email:u.email,version:u.version}),21600);return {token,user:kpiPublicUser_(u)};
}
function kpiScope_(viewer,target,write){if(viewer.email===target.email)return !write;return viewer.roles.some(r=>['HT','PHT'].includes(r))||(viewer.roles.includes('TTCM')&&viewer.unit&&viewer.unit===target.unit&&(!write||!target.roles.some(r=>['HT','PHT','TTCM'].includes(r))));}
function kpiTarget_(u,email,write){const t=kpiPeople_().find(x=>x.email===email);if(!t||!kpiScope_(u,t,write))throw Error('Không có quyền với hồ sơ này.');return t;}
function kpiLegacyTasks_(email,period){return kpiV2RowsBy_('kpi_cong_viec','email',email).filter(r=>r.period===period).map(r=>{['base','coef','progress','quality','version'].forEach(k=>r[k]=Number(r[k])||0);['inPlan','completed','cancelled'].forEach(k=>r[k]=r[k]===true||String(r[k])==='true');return r;});}
function kpiLegacySummary_(u,period){const tasks=kpiTasks_(u.email,period),g=kpiRows_('kpi_chung').find(r=>r.email===u.email&&r.period===period&&r.status==='approved');const general=g?KpiCore.round(JSON.parse(g.scores).reduce((s,x)=>s+x,0)):null;const b=kpiRows_('kpi_thuong').filter(r=>r.email===u.email&&r.period===period&&r.status==='approved').reduce((s,r)=>s+Number(r.approved||0),0);const final=kpiRows_('kpi_xep_loai').find(r=>r.email===u.email&&r.period===period);return Object.assign(kpiPublicUser_(u),KpiCore.summarize(tasks,general,b),{rating:final?final.rating:'Chờ hội đồng',decisionReference:final?final.reference:''});}
function kpiLegacyOverview_(u){const period=kpiCfg_().period;return {version:KPI_VERSION,config:kpiClientCfg_(),user:kpiPublicUser_(u),catalog:kpiRows_('bang_luong_hoa_kpi').map(c=>{['base','coef','max'].forEach(k=>c[k]=Number(c[k]));return c;}),tasks:kpiTasks_(u.email,period),general:kpiRows_('kpi_chung').filter(r=>r.email===u.email&&r.period===period),bonuses:kpiRows_('kpi_thuong').filter(r=>r.email===u.email&&r.period===period),summary:kpiSummary_(u,period),ranking:kpiPeople_().filter(t=>kpiScope_(u,t,false)).map(t=>kpiSummary_(t,period)).sort((a,b)=>(b.kpi??-1)-(a.kpi??-1)||(b.total??-1)-(a.total??-1)||a.name.localeCompare(b.name,'vi')),people:kpiPeople_().filter(t=>kpiScope_(u,t,false)).map(kpiPublicUser_)};}
function kpiRequiredText_(s,label){s=String(s||'').trim();if(!s||s.length>3000)throw Error('Thiếu hoặc quá dài: '+label);return s;}
function kpiFile_(f,u,t){if(!f)return {fileId:'',fileName:''};if(!['application/vnd.ms-excel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/pdf','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document','image/png','image/jpeg','image/webp'].includes(f.mimeType))throw Error('Loại tệp không được hỗ trợ.');const bytes=Utilities.base64Decode(f.base64);if(bytes.length>10*1024*1024)throw Error('Tệp vượt 10 MB.');const ext=({ 'application/vnd.ms-excel':'.xls','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':'.xlsx','application/pdf':'.pdf','application/msword':'.doc','application/vnd.openxmlformats-officedocument.wordprocessingml.document':'.docx','image/png':'.png','image/jpeg':'.jpg','image/webp':'.webp'})[f.mimeType];const name=[u.name,u.unit,t.title].join('_').replace(/[\\/:*?"<>|\r\n]/g,'_').slice(0,200)+ext;const file=DriveApp.getFolderById(kpiCfg_().driveFolderId).createFile(Utilities.newBlob(bytes,f.mimeType,name));return {fileId:file.getId(),fileName:name};}
function kpiLegacyDispatch_(action,p,token){
 if(action==='login')return kpiLogin_(p.email,p.digest);
 const u=kpiAuth_(token),period=kpiCfg_().period;
 if(action==='overview')return kpiOverview_(u);
 if(action==='logout'){CacheService.getScriptCache().remove('kpi-session-'+token);return {ok:true};}
 if(action==='report'){const people=kpiPeople_().filter(t=>kpiScope_(u,t,false));if(!u.roles.some(r=>['HT','PHT','TTCM'].includes(r)))throw Error('Báo cáo dành cho BGH/TTCM.');return {period,rule:kpiCfg_().schoolRule,generatedAt:new Date().toISOString(),people:people.map(t=>({user:kpiPublicUser_(t),summary:kpiSummary_(t,period),tasks:kpiTasks_(t.email,period),general:kpiRows_('kpi_chung').filter(r=>r.email===t.email&&r.period===period),bonuses:kpiRows_('kpi_thuong').filter(r=>r.email===t.email&&r.period===period)}))};}
 if(action==='profile'){const target=kpiTarget_(u,p.email,false);return {user:kpiPublicUser_(target),tasks:kpiTasks_(target.email,period),general:kpiRows_('kpi_chung').filter(r=>r.email===target.email&&r.period===period),bonuses:kpiRows_('kpi_thuong').filter(r=>r.email===target.email&&r.period===period),summary:kpiSummary_(target,period)};}
 return (()=>{
 if(action==='changePassword'){
  if(!/^[a-f0-9]{64}$/.test(p.newDigest)||!Number.isInteger(p.length)||p.length<10)throw Error('Mật khẩu mới phải ít nhất 10 ký tự.');
  const hash=String(kpiPick_(u.raw,['Mật khẩu hash'])),salt=String(kpiPick_(u.raw,['Salt KPI']));if(kpiStoredHash_(p.oldDigest,salt)!==hash)throw Error('Mật khẩu hiện tại không đúng.');if(p.oldDigest===p.newDigest)throw Error('Mật khẩu mới phải khác mật khẩu cũ.');
  const ns=Utilities.getUuid();kpiSetPerson_(u,{'Salt KPI':ns,'Mật khẩu hash':kpiStoredHash_(p.newDigest,ns),'Phiên bản mật khẩu':u.version+1,'Mật khẩu':''});CacheService.getScriptCache().remove('kpi-session-'+token);kpiAudit_(u,action,u.email,null,{changed:true});return {ok:true,relogin:true};
 }
 if(action==='decision'){
  if(!u.roles.some(r=>['HT','PHT'].includes(r)))throw Error('Chỉ BGH ghi nhận quyết định của cấp có thẩm quyền.');const target=kpiTarget_(u,p.email,true);const ratings=['Hoàn thành xuất sắc nhiệm vụ','Hoàn thành tốt nhiệm vụ','Hoàn thành nhiệm vụ','Không hoàn thành nhiệm vụ'];if(!ratings.includes(p.rating))throw Error('Mức xếp loại không hợp lệ.');const sum=kpiSummary_(target,period);if(p.rating===ratings[0]&&!sum.excellentEligible)throw Error('Chưa đủ điều kiện đề xuất xuất sắc theo nguồn.');if(p.rating===ratings[0]&&!target.group)throw Error('BGH phải xác định Nhóm nhiệm vụ tương đồng trong gvcnv trước khi chốt xuất sắc.');if(target.group){const groupPeople=kpiPeople_().filter(x=>x.group===target.group).map(x=>x.email);const decisions=kpiRows_('kpi_xep_loai').filter(r=>r.period===period&&groupPeople.includes(r.email)&&r.email!==target.email).map(r=>r.rating).concat(p.rating);const xs=decisions.filter(x=>x===ratings[0]).length,good=decisions.filter(x=>x===ratings[1]).length;if(xs>Math.floor(.2*good))throw Error('Vượt giới hạn XS của nhóm: '+xs+' XS / '+good+' HTT. Giới hạn floor(20% × HTT) = '+Math.floor(.2*good)+'. Chốt đủ kết quả nhóm trước khi xét XS.');}
  let old=kpiRows_('kpi_xep_loai').find(r=>r.email===target.email&&r.period===period);const row=Object.assign({},old||{id:Utilities.getUuid()}, {email:target.email,period,rating:p.rating,reference:kpiRequiredText_(p.reference,'số quyết định/biên bản hội đồng'),note:kpiRequiredText_(p.note,'nhận xét và xác nhận giới hạn tỷ lệ XS'),decider:u.email,updatedAt:new Date().toISOString()});kpiWrite_('kpi_xep_loai',row);kpiAudit_(u,action,row.id,old,row);return row;
 }
 if(action==='register'||action==='customTask'){
  const target=p.email?kpiTarget_(u,p.email,true):u;
  let c=kpiRows_('bang_luong_hoa_kpi').find(c=>c.id===p.criterionId);if(action==='customTask'){if(![1,1.1,1.2].includes(Number(p.coef)))throw Error('Hệ số không hợp lệ.');const kind=p.kind==='Đột xuất'?'Đột xuất':'Thường xuyên';c={id:'CUSTOM-'+Utilities.getUuid(),role:target.roles[0],title:kpiRequiredText_(p.title,'nhiệm vụ'),output:kpiRequiredText_(p.output,'sản phẩm'),kind,base:kind==='Đột xuất'?12:10,coef:Number(p.coef)};}if(!c||!target.roles.includes(c.role))throw Error('Nhiệm vụ không thuộc vai trò được phân công.');
  if(kpiTasks_(target.email,period).some(t=>t.criterionId===c.id&&!t.cancelled))throw Error('Nhiệm vụ đã có, cập nhật kết quả thay vì đăng ký trùng.');
  if(!/^\d{4}-\d{2}-\d{2}$/.test(p.due)||isNaN(Date.parse(p.due)))throw Error('Chọn hạn hoàn thành cụ thể.');
  const t={id:Utilities.getUuid(),email:target.email,period,criterionId:c.id,title:c.title,role:c.role,output:kpiRequiredText_(p.output||c.output,'sản phẩm'),due:p.due,kind:c.kind,base:Number(c.base),coef:Number(c.coef),inPlan:!!p.inPlan,planStatus:'pending',planAt:new Date().toISOString(),progress:0,quality:0,completed:false,reviewStatus:'draft',version:1,cancelled:false};kpiWrite_('kpi_cong_viec',t);kpiAudit_(u,action,t.id,null,t);return t;
 }
 if(action==='submit'||action==='approvePlan'||action==='review'||action==='cancel'){
  const t=kpiRows_('kpi_cong_viec').find(x=>x.id===p.id&&x.period===period);if(!t)throw Error('Không tìm thấy nhiệm vụ.');if(Number(p.version)!==Number(t.version))throw Error('Hồ sơ đã thay đổi. Tải lại trước khi lưu.');const before=Object.assign({},t);const target=kpiPeople_().find(x=>x.email===t.email);if(!target)throw Error('Nhân sự không còn tồn tại.');
  if(action==='submit'){
   if(kpiRows_('kpi_dot').some(o=>o.taskId===t.id))throw Error('Nhiệm vụ định kỳ: nộp từng đợt trong tab Công việc & duyệt.');
   if(t.email!==u.email||t.planStatus!=='approved'||t.cancelled)throw Error('Chưa được duyệt giao việc.');if(t.reviewStatus==='approved')throw Error('Kết quả đã duyệt. Đề nghị người duyệt mở lại.');
   if(!p.completedAt||!/^\d{4}-\d{2}-\d{2}$/.test(p.completedAt)||p.completedAt>Utilities.formatDate(new Date(),'Asia/Ho_Chi_Minh','yyyy-MM-dd'))throw Error('Ngày hoàn thành không hợp lệ.');
   if(!p.completed&&(Number(p.progress)!==0||Number(p.quality)!==0))throw Error('Chưa hoàn thành: tiến độ và chất lượng phải là 0%.');
   Object.assign(t,{progress:Number(p.progress),quality:Number(p.quality),completed:!!p.completed,completedAt:p.completedAt,note:kpiRequiredText_(p.note,'kết quả thực tế'),reviewStatus:'pending',submittedAt:new Date().toISOString()});KpiCore.score(t);
   if(p.file)Object.assign(t,kpiFile_(p.file,u,t));
  }else{
   if(!kpiScope_(u,target,true))throw Error('Không được tự duyệt hoặc duyệt ngoài phạm vi.');
   if(action==='approvePlan'){
    if(!['pending','rejected'].includes(t.planStatus))throw Error('Kế hoạch đã duyệt.');t.planStatus=p.accept?'approved':'rejected';
    if(p.accept){if(![1,1.1,1.2].includes(Number(p.coef)))throw Error('Hệ số không hợp lệ.');t.coef=Number(p.coef);t.inPlan=!!p.inPlan;}
   }
   if(action==='review'){
    if(kpiRows_('kpi_dot').some(o=>o.taskId===t.id))throw Error('Nhiệm vụ định kỳ: duyệt từng đợt, không ghi đè điểm tổng.');
    if(t.planStatus!=='approved'||!['pending','approved'].includes(t.reviewStatus))throw Error('Chưa có kết quả tự đánh giá.');
    if(p.accept){t.progress=Number(p.progress);t.quality=Number(p.quality);KpiCore.score(t);t.reviewStatus='approved';}else t.reviewStatus='returned';
   }
   if(action==='cancel'){t.cancelled=true;t.planStatus='cancelled';}
   t.reviewer=u.email;t.reviewedAt=new Date().toISOString();t.note=String(t.note||'')+'\nÝ kiến: '+kpiRequiredText_(p.note,'lý do/nhận xét duyệt');
  }
  t.version=Number(t.version)+1;kpiWrite_('kpi_cong_viec',t);kpiAudit_(u,action,t.id,before,t);return t;
 }
 if(action==='general'){
  const target=p.email?kpiTarget_(u,p.email,true):u;if(!Array.isArray(p.scores)||p.scores.length!==6||p.scores.some(x=>!Number.isFinite(x)||x<0||x>5))throw Error('Nhập 6 nhóm, mỗi nhóm 0–5 điểm.');
  let row=kpiRows_('kpi_chung').find(r=>r.email===target.email&&r.period===period),before=row?Object.assign({},row):null;
  if(target.email===u.email&&row&&row.status==='approved')throw Error('Tiêu chí chung đã được duyệt.');
  row=Object.assign(row||{id:Utilities.getUuid(),email:target.email,period},{scores:JSON.stringify(p.scores),note:kpiRequiredText_(p.note,'nhận xét'),status:target.email===u.email?'pending':'approved',reviewer:target.email===u.email?'':u.email,updatedAt:new Date().toISOString()});kpiWrite_('kpi_chung',row);kpiAudit_(u,action,row.id,before,row);return row;
 }
 if(action==='bonus'){
  const tasks=kpiTasks_(u.email,period),t=tasks.find(x=>x.id===p.taskId&&x.reviewStatus==='approved');if(!t)throw Error('Chọn nhiệm vụ đã được duyệt kết quả.');
  if(kpiRows_('kpi_thuong').some(r=>r.email===u.email&&r.period===period&&r.taskId===t.id&&r.status!=='rejected'))throw Error('Nhiệm vụ đã đề xuất thưởng.');
  const ref=kpiRequiredText_(p.reference,'kết quả/số quyết định'),category=kpiRequiredText_(p.category,'loại thành tích');
  if(!['Nổi trội theo PL5','Sáng kiến theo PL5','Tốt nghiệp bằng Thành phố','Tốt nghiệp cao hơn Thành phố','HSG Nhất','HSG Nhì','HSG Ba','HSG KK','QPAN Nhất','QPAN Nhì','QPAN Ba','QPAN KK','Hội thao Nhất','Hội thao Nhì','Hội thao Ba','Hội thao KK'].includes(category))throw Error('Loại thưởng không hợp lệ.');
  const cfg=kpiCfg_();const tiers={'Tốt nghiệp bằng Thành phố':1,'Tốt nghiệp cao hơn Thành phố':2,'HSG Nhất':3,'HSG Nhì':2,'HSG Ba':1.5,'HSG KK':1,'QPAN Nhất':3,'QPAN Nhì':2,'QPAN Ba':1.5,'QPAN KK':1,'Hội thao Nhất':3,'Hội thao Nhì':2,'Hội thao Ba':1.5,'Hội thao KK':1};const requested=tiers[category]===undefined?Number(p.requested):tiers[category];
  if(kpiRows_('kpi_thuong').some(r=>r.email===u.email&&r.period===period&&kpiNorm_(String(r.reference).split('\nXác nhận:')[0])===kpiNorm_(ref)&&r.status!=='rejected'))throw Error('Kết quả này đã có đề xuất thưởng.');if(!Number.isFinite(requested)||requested<0||requested>7)throw Error('Điểm thưởng không hợp lệ.');
  const row={id:Utilities.getUuid(),email:u.email,period,taskId:t.id,category,reference:ref,requested,approved:0,status:'pending',updatedAt:new Date().toISOString()};kpiWrite_('kpi_thuong',row);kpiAudit_(u,action,row.id,null,row);return row;
 }
 if(action==='reviewBonus'){
  const row=kpiRows_('kpi_thuong').find(r=>r.id===p.id&&r.period===period);if(!row)throw Error('Không có đề xuất thưởng.');kpiTarget_(u,row.email,true);const before=Object.assign({},row),t=kpiTasks_(row.email,period).find(t=>t.id===row.taskId),sum=kpiSummary_(kpiPeople_().find(x=>x.email===row.email),period);if(!t||sum.A<=0)throw Error('Chưa đủ dữ liệu KPI.');
  const source=String(row.category).includes('PL5');if(kpiCfg_().bonusMode!=='school'&&!source)throw Error('Chưa ban hành điểm thưởng trường. Chỉ có thể duyệt thưởng theo PL5.');
  if(p.accept&&String(row.category)==='Sáng kiến theo PL5'&&!p.qualifyingInnovation)throw Error('Xác nhận sáng kiến đã áp dụng hiệu quả và có khả năng nhân rộng.');
  if(p.accept&&String(row.category)==='Nổi trội theo PL5'){if(!p.qualifyingOutstanding)throw Error('Xác nhận nhiệm vụ quan trọng, phức tạp và hoàn thành trước 50% tiến độ hoặc thực hiện gấp dưới 2 ngày làm việc, đáp ứng chất lượng.');}
  const limit=source?KpiCore.round(.05*70*KpiCore.score(t).actual/sum.A):Number(row.requested);const value=Number(p.approved);if(!Number.isFinite(value)||value<0||value>limit)throw Error('Điểm thưởng nhiệm vụ tối đa '+limit);row.approved=p.accept?value:0;row.status=p.accept?'approved':'rejected';row.reviewer=u.email;row.reference+='\nXác nhận: '+kpiRequiredText_(p.note,'căn cứ duyệt');row.updatedAt=new Date().toISOString();kpiWrite_('kpi_thuong',row);kpiAudit_(u,action,row.id,before,row);return row;
 }
 throw Error('Hành động không hợp lệ.');
 })();
}
function doGet(e){
 const p=e&&e.parameter||{},callback=String(p.callback||'');if(callback&&!/^[A-Za-z_$][\w$]{0,90}$/.test(callback))return ContentService.createTextOutput('invalid callback');
 let result;if(p.action==='kpiPublic')result={ok:true,data:{version:KPI_VERSION,config:kpiClientCfg_(),catalog:kpiRows_('bang_luong_hoa_kpi')}};
 else if(p.action==='kpiPoll'&&/^[a-f0-9-]{36,100}$/i.test(p.ticket||'')){const c=CacheService.getScriptCache(),manifest=c.get('kpi-result-'+p.ticket);if(!manifest)result={pending:true};else {const m=JSON.parse(manifest);result=p.chunk!==undefined?{chunk:c.get('kpi-result-'+p.ticket+'-'+Number(p.chunk))}:m;}}
 else result={ok:false,error:'API KPI không hợp lệ. Triển khai KpiBackend.gs.'};
 const json=JSON.stringify(result);return ContentService.createTextOutput(callback?callback+'('+json+');':json).setMimeType(callback?ContentService.MimeType.JAVASCRIPT:ContentService.MimeType.JSON);
}
function doPost(e){
 const p=e&&e.parameter||{};const ticket=String(p.ticket||'');if(!/^[a-f0-9-]{36,100}$/i.test(ticket))return ContentService.createTextOutput('Invalid ticket');
 let result;try{result={ok:true,data:kpiDispatch_(p.action,JSON.parse(p.payload||'{}'),String(p.token||''))};}catch(err){result={ok:false,error:err.message};}
 const str=JSON.stringify(result),chunks=[];for(let i=0;i<str.length;i+=20000)chunks.push(str.slice(i,i+20000));const cache=CacheService.getScriptCache();chunks.forEach((x,i)=>cache.put('kpi-result-'+ticket+'-'+i,x,300));cache.put('kpi-result-'+ticket,JSON.stringify({ready:true,chunks:chunks.length}),300);return ContentService.createTextOutput('OK');
}
function applyKpiTimeouts(){if(kpiCfg_().autoTimeout!=='true')return;return kpiLocked_(()=>{const now=Date.now(),system={email:'SYSTEM-TIMEOUT'};kpiRows_('kpi_cong_viec').forEach(t=>{let changed=false;const before=Object.assign({},t);if(t.cancelled)return;if(!kpiV2Locked_(t.period)&&!kpiRows_('kpi_dot').some(o=>o.taskId===t.id)&&t.planStatus==='pending'&&now-Date.parse(t.planAt)>=3*86400000){t.planStatus='approved';changed=true;}if(!kpiV2Locked_(t.period)&&!kpiRows_('kpi_dot').some(o=>o.taskId===t.id)&&t.planStatus==='approved'&&t.reviewStatus==='pending'&&now-Date.parse(t.submittedAt)>=7*86400000){t.reviewStatus='approved';t.reviewer=system.email;t.reviewedAt=new Date().toISOString();changed=true;}if(changed){t.version=Number(t.version)+1;kpiWrite_('kpi_cong_viec',t);kpiAudit_(system,'SOURCE_TIMEOUT',t.id,before,t);}});});}
function installKpiTimeoutTrigger(){if(kpiCfg_().autoTimeout!=='true')throw Error('Chỉ bật sau khi trường ban hành cơ chế tự duyệt quá hạn 3/7 ngày.');if(!ScriptApp.getProjectTriggers().some(t=>t.getHandlerFunction()==='applyKpiTimeouts'))ScriptApp.newTrigger('applyKpiTimeouts').timeBased().everyHours(1).create();}
function refreshKpiResults(){const period=kpiCfg_().period;kpiPeople_().forEach(u=>{const sum=kpiSummary_(u,period),old=kpiRows_('kpi_ket_qua').find(r=>r.email===u.email&&r.period===period);kpiWrite_('kpi_ket_qua',Object.assign(old||{},{email:u.email,period,A:sum.A,B:sum.B,KPI:sum.kpi===null?'':sum.kpi,Chung:sum.general===null?'':sum.general,Thuong:sum.reward,Tong:sum.total===null?'':sum.total,SoViec:sum.count,HoanThanh:sum.done,Vuot:sum.exceeded,DuDieuKienXS:sum.excellentEligible}));});}

/* KPI 2.0. New tables preserve every existing table and password. */
Object.assign(KPI_HEADERS,{
 kpi_dot:['id','taskId','email','period','name','due','weight','status','progress','quality','completed','completedAt','note','fileId','fileName','checker','checkNote','reviewer','reviewNote','version'],
 kpi_phan_cap:['id','period','unit','delegate','teachers','roles','taskIds','criterionIds','from','until','finalApproval','active','owner','note','version'],
 kpi_ke_hoach:['id','email','period','requiredIds','status','note','reviewer','version'],
 kpi_doi_chieu:['id','taskId','email','period','productKey','share','context','version'],
 kpi_phan_hoi:['id','email','period','taskId','text','status','reply','reviewer','version'],
 kpi_chot_ky:['id','period','status','reference','reason','actor','at','version'],
 kpi_chot_ket_qua:['id','period','email','data','lockId','part','parts'],
 kpi_yeu_cau:['id','actor','action','fingerprint','result','at']
});
function kpiV2Today_(){return Utilities.formatDate(new Date(),'Asia/Ho_Chi_Minh','yyyy-MM-dd');}
function kpiV2Date_(v){if(!/^\d{4}-\d{2}-\d{2}$/.test(String(v))||new Date(v+'T00:00:00Z').toISOString().slice(0,10)!==v)throw Error('Ngày không hợp lệ.');return v;}
function kpiV2JSON_(v,fallback){try{return JSON.parse(v);}catch(e){return fallback;}}
function kpiV2Bool_(v){return v===true||v==='true';}
function kpiV2Locked_(period){return kpiRows_('kpi_chot_ky').some(r=>r.period===period&&r.status==='locked');}
function kpiV2Version_(r,p){if(!r||Number(r.version)!==Number(p.version))throw Error('Dữ liệu đã thay đổi. Tải lại trước khi lưu.');}
function kpiV2Save_(table,u,action,r,before){r.version=Number(r.version||0)+1;kpiWrite_(table,r);kpiAudit_(u,action,r.id,before,r);return r;}
function kpiV2Target_(u,email){const target=kpiPeople_().find(t=>t.email===email);if(!target||!kpiScope_(u,target,true))throw Error('Không có quyền duyệt; không được tự duyệt.');return target;}
function kpiV2Delegations_(u,t,period){const today=kpiV2Today_();return kpiRows_('kpi_phan_cap').filter(d=>d.period===period&&kpiV2Bool_(d.active)&&d.delegate===u.email&&d.unit===u.unit&&u.roles.includes('TPCM')&&d.from<=today&&d.until>=today&&t.email!==u.email&&kpiPeople_().some(p=>p.email===d.owner&&p.unit===d.unit&&p.roles.includes('TTCM'))&&kpiPeople_().some(p=>p.email===t.email&&p.unit===d.unit&&!p.roles.some(r=>['HT','PHT','TTCM'].includes(r)))&&kpiV2JSON_(d.teachers,[]).includes(t.email)&&kpiV2JSON_(d.roles,[]).includes(t.role)&&(!kpiV2JSON_(d.criterionIds,[]).length||kpiV2JSON_(d.criterionIds,[]).includes(t.criterionId))&&(!kpiV2JSON_(d.taskIds,[]).length||kpiV2JSON_(d.taskIds,[]).includes(t.id)));}
function kpiV2Rights_(u,t){const target=kpiPeople_().find(x=>x.email===t.email);const full=target&&kpiScope_(u,target,true);const ds=kpiV2Delegations_(u,t,t.period);return {check:!!full||!!ds.length,final:!!full||ds.some(d=>kpiV2Bool_(d.finalApproval)),owner:full?u.email:(ds[0]?.owner||'' )};}
function kpiTasks_(email,period){return kpiLegacyTasks_(email,period).map(t=>{const rows=kpiV2RowsBy_('kpi_dot','taskId',t.id).filter(o=>o.period===period).map(o=>({...o,weight:Number(o.weight),progress:Number(o.progress),quality:Number(o.quality),completed:kpiV2Bool_(o.completed),version:Number(o.version)}));if(rows.length){t.occurrences=rows;const active=rows.filter(o=>o.status!=='cancelled');t.completed=active.length>0&&active.every(o=>o.status==='approved'&&o.completed&&o.quality>=60);t.reviewStatus=t.completed?'approved':active.some(o=>o.status==='pending'||o.status==='checked')?'pending':'partial';const den=active.reduce((a,o)=>a+o.weight,0);t.progress=den?KpiCore.round(active.reduce((a,o)=>a+o.weight*o.progress,0)/den):0;t.quality=den?KpiCore.round(active.reduce((a,o)=>a+o.weight*o.quality,0)/den):0;t.completedAt=t.completed?active.map(o=>o.completedAt).sort().pop():'';t.due=active.map(o=>o.due).sort().pop()||t.due;}
 const meta=kpiV2RowsBy_('kpi_doi_chieu','taskId',t.id)[0];if(meta)t.attribution={productKey:meta.productKey,share:Number(meta.share),context:meta.context};return t;});}
function kpiSummary_(u,period){const s=kpiLegacySummary_(u,period),tasks=kpiTasks_(u.email,period).filter(t=>!t.cancelled&&t.planStatus==='approved'),today=kpiV2Today_();let dueA=0,dueB=0,future=0,missing=0;tasks.forEach(t=>{if(t.occurrences){const active=t.occurrences.filter(o=>o.status!=='cancelled'),den=active.reduce((a,o)=>a+o.weight,0);active.forEach(o=>{if(o.due>today){future++;return;}if(t.inPlan)dueA+=t.base*t.coef*o.weight/den;if(o.status==='approved')dueB+=t.base*t.coef*o.weight/den*(.3*o.progress/100+.7*o.quality/100);else missing++;});}else if(t.due<=today){if(t.inPlan)dueA+=t.base*t.coef;if(t.reviewStatus==='approved')dueB+=KpiCore.score(t).actual;else missing++;}else future++;});const plan=kpiRows_('kpi_ke_hoach').find(r=>r.email===u.email&&r.period===period);const ready=plan?.status==='confirmed';return Object.assign(s,{planConfirmed:ready,dueA:KpiCore.round(dueA),dueB:KpiCore.round(dueB),dueKpi:dueA?KpiCore.round(Math.min(70,dueB/dueA*70)):null,future,missing,provisional:!ready||missing>0||future>0,excellentEligible:s.excellentEligible&&ready&&missing===0});}
function kpiOverview_(u){const d=kpiLegacyOverview_(u);d.workflow=kpiV2Workspace_(u);return d;}
function kpiV2Workspace_(u,p){p=p||{};const period=kpiCfg_().period,people=kpiPeople_(),all=kpiRows_('kpi_cong_viec').filter(t=>t.period===period&&!kpiV2Bool_(t.cancelled)),allowed=all.filter(t=>t.email===u.email||kpiV2Rights_(u,t).check),others=allowed.filter(t=>t.email!==u.email).sort((a,b)=>((a.planStatus==='pending'||a.reviewStatus==='pending')?0:1)-((b.planStatus==='pending'||b.reviewStatus==='pending')?0:1)||String(a.due).localeCompare(String(b.due))||String(a.id).localeCompare(String(b.id))),pageSize=40,pages=Math.max(1,Math.ceil(others.length/pageSize)),page=Math.min(pages,Math.max(1,Number.isInteger(Number(p.page))?Number(p.page):1)),focus=p.focusTaskId?others.filter(t=>t.id===p.focusTaskId):null;if(p.focusTaskId&&!focus.length)throw Error('Không có quyền với nhiệm vụ yêu cầu.');const selected=allowed.filter(t=>t.email===u.email).concat(focus||others.slice((page-1)*pageSize,page*pageSize)),emails=[...new Set(selected.map(t=>t.email))];const tasks=emails.flatMap(email=>kpiTasks_(email,period)).filter(t=>selected.some(a=>a.id===t.id)).map(t=>({...t,person:kpiPublicUser_(people.find(p=>p.email===t.email)),rights:kpiV2Rights_(u,t)}));return {tasks,page:focus?1:page,pages:focus?1:pages,totalOther:focus?focus.length:others.length,pageSize,focused:!!focus,people:people.filter(p=>p.email===u.email||kpiScope_(u,p,false)).map(kpiPublicUser_),plans:kpiRows_('kpi_ke_hoach').filter(r=>r.period===period&&(r.email===u.email||people.some(p=>p.email===r.email&&kpiScope_(u,p,false)))),delegations:kpiRows_('kpi_phan_cap').filter(r=>r.period===period&&(r.owner===u.email||r.delegate===u.email||u.roles.some(x=>['HT','PHT'].includes(x)))),appeals:kpiRows_('kpi_phan_hoi').filter(r=>r.period===period&&(r.email===u.email||people.some(p=>p.email===r.email&&kpiScope_(u,p,true)))),lock:kpiRows_('kpi_chot_ky').find(r=>r.period===period)||{status:'open',version:0}};}
function kpiV2Mutate_(u,period,action,p){
 if(action==='schedule'){
 const t=kpiRows_('kpi_cong_viec').find(t=>t.id===p.taskId&&t.period===period);kpiV2Version_(t,p);kpiV2Target_(u,t.email);if(t.cancelled||t.planStatus!=='approved'||!['draft','partial'].includes(t.reviewStatus)||kpiRows_('kpi_dot').some(o=>o.taskId===t.id))throw Error('Chỉ cấu hình một lần trước khi nộp kết quả.');if(!Array.isArray(p.items)||p.items.length<2||p.items.length>60)throw Error('Cần 2–60 đợt.');const items=p.items.map((o,i)=>({id:Utilities.getUuid(),taskId:t.id,email:t.email,period,name:kpiRequiredText_(o.name,'tên đợt '+(i+1)),due:kpiV2Date_(o.due),weight:Number(o.weight),status:'draft',progress:0,quality:0,completed:false,version:1}));if(items.some(o=>!Number.isFinite(o.weight)||o.weight<=0||o.weight>10000))throw Error('Trọng số phải > 0 và ≤ 10000.');items.forEach(o=>kpiWrite_('kpi_dot',o));kpiV2Save_('kpi_cong_viec',u,action,t,{...t});return items;
 }
 if(['submitOccurrence','checkOccurrence','reviewOccurrence','exceptionOccurrence'].includes(action)){
 const o=kpiRows_('kpi_dot').find(o=>o.id===p.id&&o.period===period);kpiV2Version_(o,p);const before={...o},t=kpiRows_('kpi_cong_viec').find(t=>t.id===o.taskId&&t.period===period);if(!t||t.cancelled||t.planStatus!=='approved'||o.status==='cancelled')throw Error('Nhiệm vụ/đợt không còn hiệu lực.');const rights=kpiV2Rights_(u,t);
 if(action==='submitOccurrence'){if(o.email!==u.email||!['draft','returned','pending'].includes(o.status))throw Error('Không được nộp lại đợt đã kiểm tra/duyệt.');o.completed=p.completed===true;o.completedAt=kpiV2Date_(p.completedAt);if(o.completedAt>kpiV2Today_())throw Error('Ngày hoàn thành không được ở tương lai.');o.progress=Number(p.progress);o.quality=Number(p.quality);KpiCore.score({...t,progress:o.progress,quality:o.quality});if(!o.completed&&(o.progress||o.quality))throw Error('Chưa hoàn thành phải ghi 0%.');o.note=kpiRequiredText_(p.note,'kết quả/giải trình');o.status='pending';o.checker='';o.checkNote='';if(p.file)Object.assign(o,kpiFile_(p.file,u,{title:t.title+'_'+o.name}));
 }else if(action==='exceptionOccurrence'){kpiV2Target_(u,t.email);if(p.operation==='extend'){o.due=kpiV2Date_(p.due);o.reviewNote='Gia hạn: '+kpiRequiredText_(p.note,'lý do');}else if(p.operation==='cancel'){if(kpiRows_('kpi_dot').filter(x=>x.taskId===t.id&&x.status!=='cancelled').length<=1)throw Error('Không miễn đợt cuối; mở lại kế hoạch rồi hủy nhiệm vụ nếu không còn phân công.');o.status='cancelled';o.reviewNote='Miễn đợt: '+kpiRequiredText_(p.note,'lý do');}else if(p.operation==='reopen'){if(o.status!=='approved')throw Error('Đợt chưa duyệt.');o.status='returned';o.reviewNote='Mở lại: '+kpiRequiredText_(p.note,'lý do');}else throw Error('Thao tác không hợp lệ.');o.reviewer=u.email;
 }else{if(!rights.check||!['pending','checked'].includes(o.status))throw Error('Không có quyền hoặc đợt chưa chờ duyệt.');const note=kpiRequiredText_(p.note,'nhận xét');if(action==='checkOccurrence'){o.checker=u.email;o.checkNote=note;o.status=p.accept?'checked':'returned';}else{if(!rights.final)throw Error('Chỉ được kiểm tra/đề nghị; TTCM duyệt cuối cùng.');if(p.accept){o.progress=Number(p.progress);o.quality=Number(p.quality);KpiCore.score({...t,progress:o.progress,quality:o.quality});if(!kpiV2Bool_(o.completed)&&(o.progress||o.quality))throw Error('Đợt chưa hoàn thành phải ghi 0%.');}o.reviewer=u.email;o.reviewNote=note;o.status=p.accept?'approved':'returned';}}
 return kpiV2Save_('kpi_dot',u,action,o,before);
 }
 if(action==='delegate'){
 if(!u.roles.includes('TTCM')||!u.unit)throw Error('TTCM lập phân công cho tổ mình.');const deputy=kpiPeople_().find(x=>x.email===p.delegate&&x.unit===u.unit&&x.roles.includes('TPCM')&&x.email!==u.email);if(!deputy)throw Error('Chọn TPCM trong tổ.');if(!Array.isArray(p.teachers)||!p.teachers.length||p.teachers.some(email=>!kpiPeople_().some(t=>t.email===email&&t.unit===u.unit&&!t.roles.some(r=>['HT','PHT','TTCM'].includes(r)))))throw Error('Danh sách tổ viên không hợp lệ.');if(!Array.isArray(p.roles)||!p.roles.length||p.roles.some(r=>!['GVBM','GVCN','HOANHAP','TPCM'].includes(r)))throw Error('Chọn nhóm nhiệm vụ hợp lệ.');kpiV2Date_(p.from);kpiV2Date_(p.until);if(p.from>p.until)throw Error('Ngày bắt đầu sau ngày kết thúc.');const criterionIds=Array.isArray(p.criterionIds)?p.criterionIds:[];if(criterionIds.some(id=>!kpiRows_('bang_luong_hoa_kpi').some(c=>c.id===id&&p.roles.includes(c.role))))throw Error('Đề mục phân cấp không thuộc nhóm vai trò đã chọn.');const taskIds=Array.isArray(p.taskIds)?p.taskIds:[];if(taskIds.some(id=>!kpiRows_('kpi_cong_viec').some(t=>t.id===id&&t.period===period&&p.teachers.includes(t.email)&&p.roles.includes(t.role))))throw Error('Nhiệm vụ phân cấp không thuộc phạm vi.');const r={id:Utilities.getUuid(),period,unit:u.unit,delegate:p.delegate,teachers:JSON.stringify(p.teachers),roles:JSON.stringify(p.roles),taskIds:JSON.stringify(taskIds),criterionIds:JSON.stringify(criterionIds),from:p.from,until:p.until,finalApproval:p.finalApproval===true,active:true,owner:u.email,note:kpiRequiredText_(p.note,'căn cứ phân công')};return kpiV2Save_('kpi_phan_cap',u,action,r,null);
 }
 if(action==='revokeDelegation'){const r=kpiRows_('kpi_phan_cap').find(r=>r.id===p.id&&r.period===period);kpiV2Version_(r,p);if(r.owner!==u.email&&!u.roles.some(x=>['HT','PHT'].includes(x)))throw Error('Không có quyền thu hồi.');const before={...r};r.active=false;r.note+='\nThu hồi: '+kpiRequiredText_(p.note,'lý do');return kpiV2Save_('kpi_phan_cap',u,action,r,before);}
 if(action==='plan'){
 const target=kpiV2Target_(u,p.email),old=kpiRows_('kpi_ke_hoach').find(r=>r.email===target.email&&r.period===period);if(old)kpiV2Version_(old,p);const ids=p.requiredIds;if(!Array.isArray(ids)||!ids.length||new Set(ids).size!==ids.length||ids.some(id=>!kpiRows_('bang_luong_hoa_kpi').some(c=>c.id===id&&target.roles.includes(c.role))&&!kpiRows_('kpi_cong_viec').some(t=>t.criterionId===id&&t.email===target.email&&t.period===period&&!kpiV2Bool_(t.cancelled)&&target.roles.includes(t.role))))throw Error('Chọn các nhiệm vụ bắt buộc phù hợp vai trò.');const tasks=kpiTasks_(target.email,period);if(p.confirm&&ids.some(id=>!tasks.some(t=>t.criterionId===id&&t.planStatus==='approved'&&t.inPlan&&!t.cancelled)))throw Error('Chưa đăng ký/duyệt đủ nhiệm vụ bắt buộc trong kế hoạch A.');const r={...(old||{id:Utilities.getUuid()}),email:target.email,period,requiredIds:JSON.stringify(ids),status:p.confirm?'confirmed':'draft',reviewer:u.email,note:kpiRequiredText_(p.note,'căn cứ rà soát kế hoạch')};return kpiV2Save_('kpi_ke_hoach',u,action,r,old);
 }
 if(action==='attribution'){
 const t=kpiRows_('kpi_cong_viec').find(t=>t.id===p.taskId&&t.period===period);kpiV2Version_(t,p);kpiV2Target_(u,t.email);const key=kpiRequiredText_(p.productKey,'mã sản phẩm/kết quả').trim().toLowerCase(),share=Number(p.share);if(!Number.isFinite(share)||share<=0||share>100)throw Error('Phần đóng góp > 0 và ≤ 100%.');const others=kpiRows_('kpi_doi_chieu').filter(m=>m.period===period&&m.productKey===key&&m.taskId!==t.id&&kpiRows_('kpi_cong_viec').some(x=>x.id===m.taskId&&!kpiV2Bool_(x.cancelled)));if(others.some(m=>m.email===t.email))throw Error('Một người không tính lại cùng sản phẩm ở hai nhiệm vụ/vai trò.');if(others.reduce((s,m)=>s+Number(m.share),share)>100.000001)throw Error('Tổng phần đóng góp cùng kết quả vượt 100%.');const old=kpiV2RowsBy_('kpi_doi_chieu','taskId',t.id)[0],r={...(old||{id:Utilities.getUuid()}),taskId:t.id,email:t.email,period,productKey:key,share,context:kpiRequiredText_(p.context,'bối cảnh, số liệu và đóng góp')};kpiV2Save_('kpi_cong_viec',u,action,t,{...t});return kpiV2Save_('kpi_doi_chieu',u,action,r,old);
 }
 if(action==='appeal'){const t=kpiRows_('kpi_cong_viec').find(t=>t.id===p.taskId&&t.period===period&&t.email===u.email);if(!t)throw Error('Chỉ phản hồi nhiệm vụ của mình.');return kpiV2Save_('kpi_phan_hoi',u,action,{id:Utilities.getUuid(),email:u.email,period,taskId:t.id,text:kpiRequiredText_(p.text,'nội dung phản hồi'),status:'pending'},null);}
 if(action==='replyAppeal'){const r=kpiRows_('kpi_phan_hoi').find(r=>r.id===p.id&&r.period===period);kpiV2Version_(r,p);kpiV2Target_(u,r.email);const before={...r};r.reply=kpiRequiredText_(p.reply,'trả lời');r.status='answered';r.reviewer=u.email;return kpiV2Save_('kpi_phan_hoi',u,action,r,before);}
 if(action==='periodLock'){
 if(!u.roles.includes('HT'))throw Error('Chỉ Hiệu trưởng chốt/mở kỳ.');const old=kpiRows_('kpi_chot_ky').find(r=>r.period===period);if(old)kpiV2Version_(old,p);if(!['locked','open'].includes(p.status))throw Error('Trạng thái không hợp lệ.');if((old?.status||'open')===p.status)throw Error('Kỳ đã ở trạng thái này.');const r={...(old||{id:Utilities.getUuid()}),period,status:p.status,reference:kpiRequiredText_(p.reference,'biên bản/quyết định'),reason:kpiRequiredText_(p.note,'lý do'),actor:u.email,at:new Date().toISOString()};if(p.status==='locked'){const people=kpiPeople_();if(people.some(t=>{const s=kpiSummary_(t,period);return !s.planConfirmed||s.future||s.missing||s.general===null;}))throw Error('Còn kế hoạch chưa xác nhận, đợt chưa đến hạn/chưa duyệt hoặc thiếu điểm chung.');if(kpiRows_('kpi_phan_hoi').some(a=>a.period===period&&a.status==='pending'))throw Error('Còn phản hồi chưa xử lý.');if(people.some(t=>!kpiRows_('kpi_xep_loai').some(x=>x.email===t.email&&x.period===period)))throw Error('Còn nhân sự chưa ghi nhận quyết định xếp loại.');if(kpiRows_('kpi_thuong').some(b=>b.period===period&&b.status==='pending')||kpiRows_('kpi_cong_viec').some(t=>t.period===period&&!kpiV2Bool_(t.cancelled)&&t.planStatus==='pending'))throw Error('Còn đề xuất thưởng/giao việc chờ duyệt.');people.forEach(t=>{const data=JSON.stringify({user:kpiPublicUser_(t),summary:kpiSummary_(t,period),tasks:kpiTasks_(t.email,period),general:kpiRows_('kpi_chung').filter(g=>g.email===t.email&&g.period===period),bonuses:kpiRows_('kpi_thuong').filter(b=>b.email===t.email&&b.period===period)}),parts=Math.ceil(data.length/40000);for(let i=0;i<parts;i++)kpiWrite_('kpi_chot_ket_qua',{id:Utilities.getUuid(),period,email:t.email,lockId:r.id+'-'+(Number(r.version||0)+1),data:data.slice(i*40000,(i+1)*40000),part:i+1,parts});});}return kpiV2Save_('kpi_chot_ky',u,action,r,old);
 }
 return null;
}
function kpiV2BulkItem_(u,period,item,apply){
 const actions=['approvePlan','review','checkOccurrence','reviewOccurrence'];if(!actions.includes(item.action))throw Error('Thao tác hàng loạt không hợp lệ.');if(['checkOccurrence','reviewOccurrence'].includes(item.action)){const o=kpiRows_('kpi_dot').find(o=>o.id===item.id&&o.period===period);kpiV2Version_(o,item);const t=kpiRows_('kpi_cong_viec').find(t=>t.id===o.taskId&&t.period===period);if(!t||kpiV2Bool_(t.cancelled)||t.planStatus!=='approved')throw Error('Nhiệm vụ không hiệu lực.');const rights=kpiV2Rights_(u,t);if(!rights.check||(item.action==='reviewOccurrence'&&!rights.final)||!['pending','checked'].includes(o.status))throw Error('Không có quyền hoặc đợt không chờ duyệt.');kpiRequiredText_(item.note,'nhận xét');if(item.accept&&item.action==='reviewOccurrence'){KpiCore.score({...t,progress:Number(item.progress),quality:Number(item.quality)});if(!kpiV2Bool_(o.completed)&&(Number(item.progress)||Number(item.quality)))throw Error('Đợt chưa hoàn thành phải ghi 0%.');}return apply?kpiV2Mutate_(u,period,item.action,item):{id:o.id,version:Number(o.version),name:kpiPeople_().find(p=>p.email===o.email)?.name,title:t.title+' / '+o.name,action:item.action,accept:item.accept,progress:item.progress,quality:item.quality,note:item.note};}
 const t=kpiRows_('kpi_cong_viec').find(t=>t.id===item.id&&t.period===period);kpiV2Version_(t,item);kpiV2Target_(u,t.email);kpiRequiredText_(item.note,'nhận xét');if(t.cancelled)throw Error('Đã hủy.');if(item.action==='approvePlan'){if(item.inPlan&&kpiRows_('kpi_ke_hoach').some(p=>p.period===period&&p.email===t.email&&p.status==='confirmed'))throw Error('Kế hoạch đã xác nhận. Mở lại trước khi thay đổi A.');if(!['pending','rejected'].includes(t.planStatus))throw Error('Kế hoạch không chờ duyệt.');if(item.accept&&![1,1.1,1.2].includes(Number(item.coef)))throw Error('Hệ số sai.');}else{if(kpiRows_('kpi_dot').some(o=>o.taskId===t.id)||t.planStatus!=='approved'||t.reviewStatus!=='pending')throw Error('Chưa chờ duyệt hoặc là nhiệm vụ định kỳ.');if(item.accept)KpiCore.score({...t,progress:Number(item.progress),quality:Number(item.quality)});}
 return apply?kpiLegacyDispatch_(item.action,item,u._token):{id:t.id,version:Number(t.version),name:kpiPeople_().find(p=>p.email===t.email)?.name,title:t.title,action:item.action,accept:item.accept,progress:item.progress,quality:item.quality,coef:item.coef,inPlan:item.inPlan,note:item.note};
}
function kpiV2Once_(u,action,p,fn){
 if(!p.requestId)return fn();if(!/^[a-f0-9-]{36}$/.test(p.requestId))throw Error('Mã yêu cầu không hợp lệ.');const fingerprint=kpiSha_(JSON.stringify(p)),old=kpiRows_('kpi_yeu_cau').find(r=>r.id===p.requestId);if(old){if(old.actor!==u.email||old.action!==action||old.fingerprint!==fingerprint)throw Error('Mã yêu cầu đã dùng cho dữ liệu khác.');return JSON.parse(old.result);}const out=fn(),str=JSON.stringify(out);if(str.length<=45000)kpiWrite_('kpi_yeu_cau',{id:p.requestId,actor:u.email,action,fingerprint,result:str,at:new Date().toISOString()});return out;
}
var KPI_READ_CACHE=null,KPI_INDEX_CACHE={},KPI_PEOPLE_CACHE=null;
function kpiPeople_(){if(!KPI_PEOPLE_CACHE)KPI_PEOPLE_CACHE=kpiLegacyPeople_();return KPI_PEOPLE_CACHE.map(u=>({...u,roles:[...u.roles],raw:{...u.raw}}));}
function kpiV2RowsBy_(table,key,value){const tag=table+'|'+key;if(!KPI_INDEX_CACHE[tag]){const map=new Map();kpiRows_(table).forEach(r=>{const v=String(r[key]);if(!map.has(v))map.set(v,[]);map.get(v).push(r);});KPI_INDEX_CACHE[tag]=map;}return (KPI_INDEX_CACHE[tag].get(String(value))||[]).map(r=>({...r}));}
function kpiV2ReportPage_(u,p){if(!u.roles.some(r=>['HT','PHT','TTCM'].includes(r)))throw Error('Báo cáo dành cho BGH/TTCM.');const period=kpiCfg_().period,people=kpiPeople_().filter(t=>kpiScope_(u,t,false)),pages=Math.max(1,Math.ceil(people.length/10)),page=Number(p.page||1);if(!Number.isInteger(page)||page<1||page>pages)throw Error('Trang báo cáo không hợp lệ.');return {period,rule:kpiCfg_().schoolRule,generatedAt:new Date().toISOString(),page,pages,revision:String(kpiSheet_('kpi_nhat_ky').getLastRow()),people:people.slice((page-1)*10,page*10).map(t=>({user:kpiPublicUser_(t),summary:kpiSummary_(t,period),tasks:kpiTasks_(t.email,period),general:kpiV2RowsBy_('kpi_chung','email',t.email).filter(r=>r.period===period),bonuses:kpiV2RowsBy_('kpi_thuong','email',t.email).filter(r=>r.period===period)}))};}

function kpiRows_(name){if(!KPI_READ_CACHE)return kpiRawRows_(name);if(!KPI_READ_CACHE[name])KPI_READ_CACHE[name]=kpiRawRows_(name);return KPI_READ_CACHE[name].map(r=>({...r}));}
function kpiDispatch_(action,p,token){
 KPI_READ_CACHE={};KPI_INDEX_CACHE={};KPI_PEOPLE_CACHE=null;p=p||{};if(action==='login')return kpiLocked_(()=>kpiLegacyDispatch_(action,p,token));let u=kpiAuth_(token);const period=kpiCfg_().period;u._token=token;
 if(['overview','profile','report','logout'].includes(action))return kpiLegacyDispatch_(action,p,token);
 if(action==='workspace')return kpiV2Workspace_(u,p);
 if(action==='reportPage')return kpiLocked_(()=>{KPI_READ_CACHE={};KPI_INDEX_CACHE={};KPI_PEOPLE_CACHE=null;return kpiV2ReportPage_(kpiAuth_(token),p);});
 return kpiLocked_(()=>{KPI_READ_CACHE={};KPI_INDEX_CACHE={};KPI_PEOPLE_CACHE=null;u=kpiAuth_(token);u._token=token;if(action!=='changePassword'&&action!=='periodLock'&&kpiV2Locked_(period))throw Error('Kỳ đã chốt. Hiệu trưởng phải mở lại có lý do trước khi sửa.');
 if(action==='bulkPreview'){if(!Array.isArray(p.items)||!p.items.length||p.items.length>40)throw Error('Chọn 1–40 hồ sơ mỗi lượt.');const ids=p.items.map(x=>x.id);if(new Set(ids).size!==ids.length)throw Error('Có hồ sơ trùng.');const results=p.items.map(item=>{try{return {ok:true,data:kpiV2BulkItem_(u,period,item,false)};}catch(e){return {ok:false,id:item.id,error:e.message};}});if(JSON.stringify({actor:u.email,period,items:p.items,results}).length>90000)throw Error('Lượt xem lại quá lớn; giảm số hồ sơ/nhận xét.');const previewId=Utilities.getUuid();CacheService.getScriptCache().put('kpi-preview-'+previewId,JSON.stringify({actor:u.email,period,items:p.items,results}),600);return {previewId,results};}
 if(action==='bulkCommit'){const saved=CacheService.getScriptCache().get('kpi-preview-'+p.previewId);if(!saved)throw Error('Bước xem lại đã hết hạn sau 10 phút.');const preview=JSON.parse(saved);if(preview.actor!==u.email||preview.period!==period)throw Error('Không được xác nhận lượt của người khác.');const existing=kpiRows_('kpi_yeu_cau').find(r=>r.id===p.previewId&&r.actor===u.email);if(existing)return JSON.parse(existing.result);const results=preview.items.map((item,i)=>{if(!preview.results[i].ok)return preview.results[i];try{const row=kpiV2BulkItem_(u,period,item,true);return {ok:true,id:item.id,version:row.version,status:row.status||row.reviewStatus||row.planStatus};}catch(e){return {ok:false,id:item.id,error:e.message};}});const out={results};kpiWrite_('kpi_yeu_cau',{id:p.previewId,actor:u.email,action,at:new Date().toISOString(),result:JSON.stringify(out)});return out;}
 const supported=['schedule','submitOccurrence','checkOccurrence','reviewOccurrence','exceptionOccurrence','delegate','revokeDelegation','plan','attribution','appeal','replyAppeal','periodLock'];
 if(supported.includes(action))return kpiV2Once_(u,action,p,()=>kpiV2Mutate_(u,period,action,p));
 if(['register','customTask','approvePlan','cancel'].includes(action)){let email=p.email||u.email;if(['approvePlan','cancel'].includes(action))email=kpiRows_('kpi_cong_viec').find(t=>t.id===p.id)?.email;const plan=kpiRows_('kpi_ke_hoach').find(r=>r.email===email&&r.period===period);if(plan?.status==='confirmed'&&(action==='cancel'||p.inPlan))throw Error('Kế hoạch đã xác nhận. Mở lại kế hoạch trong tab Công việc & duyệt trước khi thay đổi A.');}
 return kpiV2Once_(u,action,p,()=>kpiLegacyDispatch_(action,p,token));
 });
}


function kpiClientCfg_(){const c=kpiCfg_();return {period:c.period,schoolRule:c.schoolRule,bonusMode:c.bonusMode};}
function kpiRawRows_(name){return (tables[name]||[]).map(r=>structuredClone(r));}
function kpiWrite_(name,o){if(!headers[name])throw Error('Bảng không hợp lệ');const rows=tables[name]||(tables[name]=[]);const row=o._row||Math.max(1,...rows.map(r=>r._row))+1;const value={_row:row};headers[name].forEach(k=>value[k]=o[k]===undefined?'':typeof o[k]==='object'?JSON.stringify(o[k]):o[k]);const i=rows.findIndex(r=>r._row===row);if(i<0)rows.push(value);else rows[i]=value;writes.set(name+'|'+row,{table_name:name,row_no:row,data:value});if(KPI_READ_CACHE)delete KPI_READ_CACHE[name];KPI_INDEX_CACHE={};if(name==='gvcnv')KPI_PEOPLE_CACHE=null;}
function kpiSheet_(name){return {getLastRow:()=>Math.max(1,...(tables[name]||[]).map(r=>r._row))};}
function kpiLocked_(fn){return fn();}
function kpiAuth_(token){if(!actor||token!==sessionToken)throw Error('Phiên không hợp lệ');const u=kpiPeople_().find(x=>x.email===actor);if(!u)throw Error('Không có tài khoản');return u;}
function kpiFile_(f,u,t){if(!f)return {fileId:'',fileName:''};return prepareFile(f,u,t);}
function kpiSetPerson_(){throw Error('Mật khẩu do dịch vụ xác thực quản lý');}

return {dispatch:(a,p,t=sessionToken)=>kpiDispatch_(a,p,t),publicData:()=>({version:'3.0.0-supabase',config:kpiClientCfg_(),catalog:kpiRows_('bang_luong_hoa_kpi')}),people:()=>kpiPeople_().map(kpiPublicUser_),writes:()=>[...writes.values()],cacheWrites:()=>[...cacheWrites.values()]};
}

