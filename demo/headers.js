const DEMO_HEADERS={
 kpi_cong_viec:['id','email','period','criterionId','title','role','output','due','kind','base','coef','inPlan','planStatus','planAt','progress','quality','completed','completedAt','note','fileId','fileName','reviewStatus','submittedAt','reviewer','reviewedAt','version','cancelled'],
 kpi_chung:['id','email','period','scores','note','status','reviewer','updatedAt'],
 kpi_thuong:['id','email','period','taskId','category','reference','requested','approved','status','reviewer','updatedAt'],
 kpi_nhat_ky:['at','actor','action','entity','before','after'],
 kpi_cau_hinh:['key','value'],
 kpi_xep_loai:['id','email','period','rating','reference','note','decider','updatedAt'],
 kpi_ket_qua:['email','period','A','B','KPI','Chung','Thuong','Tong','SoViec','HoanThanh','Vuot','DuDieuKienXS'],
 bang_luong_hoa_kpi:['id','role','title','output','sourceDue','kind','base','coef','max','evidence','source']
};
Object.assign(DEMO_HEADERS,{
 kpi_dot:['id','taskId','email','period','name','due','weight','status','progress','quality','completed','completedAt','note','fileId','fileName','checker','checkNote','reviewer','reviewNote','version'],
 kpi_phan_cap:['id','period','unit','delegate','teachers','roles','taskIds','criterionIds','from','until','finalApproval','active','owner','note','version'],
 kpi_ke_hoach:['id','email','period','requiredIds','status','note','reviewer','version'],
 kpi_doi_chieu:['id','taskId','email','period','productKey','share','context','version'],
 kpi_phan_hoi:['id','email','period','taskId','text','status','reply','reviewer','version'],
 kpi_chot_ky:['id','period','status','reference','reason','actor','at','version'],
 kpi_chot_ket_qua:['id','period','email','data','lockId','part','parts'],
 kpi_yeu_cau:['id','actor','action','fingerprint','result','at']
});
DEMO_HEADERS.gvcnv=["Họ và tên","Email","Tổ","Môn","Chức vụ","Vai trò KPI","Lớp chủ nhiệm","Hòa nhập","Nhóm nhiệm vụ tương đồng","Phiên bản mật khẩu"];

DEMO_HEADERS.bang_luong_hoa_kpi.push("mandatory","periodic");
DEMO_HEADERS.kpi_thuong_chuyen_ky=["id", "email", "sourcePeriod", "targetPeriod", "examYear", "assessmentYear", "taskId", "category", "reference", "requested", "approved", "status", "version", "at", "reviewer", "reviewNote"];
