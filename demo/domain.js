// Validated request-local domain, extended in 3.2. Do not regenerate from old Code.gs.
const CURRENT_CATALOG = [{"id": "GVBM-1", "role": "GVBM", "title": "Ra vào lớp và tham gia họp đúng giờ, không bỏ tiết, không bỏ họp", "output": "Theo dõi BGH và Điểm danh sổ họp", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Dữ liệu BGH và Sổ điểm danh", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / GVBM", "mandatory": true, "periodic": false}, {"id": "GVBM-2", "role": "GVBM", "title": "Xây dựng kế hoạch bài dạy, học liệu và chuẩn bị phương tiện, thiết bị dạy học theo yêu cầu của chương trình và kế hoạch giáo dục nhà trường.", "output": "Kế hoạch bài dạy, học liệu", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Kế hoạch bài dạy", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / GVBM", "mandatory": true, "periodic": true}, {"id": "GVBM-3", "role": "GVBM", "title": "Tổ chức dạy học đúng chương trình, yêu cầu cần đạt, đúng thời gian và bảo đảm chất lượng các tiết dạy theo thời khóa biểu, phân công chuyên môn và định mức tiết dạy theo quy định.", "output": "Lịch giảng dạy / Sổ đầu bài", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Sổ đầu bài, TKB", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / GVBM", "mandatory": true, "periodic": false}, {"id": "GVBM-4", "role": "GVBM", "title": "Tổ chức kiểm tra, đánh giá thường xuyên, định kỳ và cập nhật điểm số, nhận xét học sinh", "output": "Bảng điểm môn học và học bạ điện tử", "sourceDue": "Theo lịch", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Dữ liệu điểm số đồng bộ trên VnEdu", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / GVBM", "mandatory": true, "periodic": true}, {"id": "GVBM-5", "role": "GVBM", "title": "Xây dựng đề, đáp án, hướng dẫn chấm và thực hiện kiểm tra, đánh giá kết quả học tập, sự tiến bộ của học sinh theo phân công và quy định.", "output": "Đề kiểm tra, đáp án, ma trận", "sourceDue": "2026-09-30T00:00:00", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Hồ sơ đề thi, đáp án", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / GVBM", "mandatory": true, "periodic": false}, {"id": "GVBM-6", "role": "GVBM", "title": "Phân tích kết quả học tập và sự tiến bộ của học sinh theo từng giai đoạn; xác định những nội dung cần điều chỉnh và đề xuất biện pháp nâng cao chất lượng dạy học.", "output": "Báo cáo phân tích chất lượng", "sourceDue": "2026-09-30T00:00:00", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Báo cáo chuyên môn", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / GVBM", "mandatory": true, "periodic": false}, {"id": "GVBM-7", "role": "GVBM", "title": "Thực hiện phụ đạo, hỗ trợ học sinh chưa đạt yêu cầu theo kế hoạch; bồi dưỡng học sinh giỏi, hướng dẫn nghiên cứu khoa học hoặc tham gia các kỳ thi khi được phân công.", "output": "Kế hoạch & Danh sách HS", "sourceDue": "2026-09-30T00:00:00", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "Hồ sơ phụ đạo, bồi dưỡng HSG", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / GVBM", "mandatory": true, "periodic": false}, {"id": "GVBM-8", "role": "GVBM", "title": "Thực hiện giáo dục hòa nhập đối với học sinh thuộc phạm vi được giao; phối hợp thực hiện các biện pháp hỗ trợ phù hợp với từng đối tượng học sinh.", "output": "Kế hoạch giáo dục cá nhân hóa", "sourceDue": "2026-09-30T00:00:00", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "Hồ sơ theo dõi HS hòa nhập", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / GVBM", "mandatory": true, "periodic": false}, {"id": "GVBM-9", "role": "GVBM", "title": "Tham gia đầy đủ sinh hoạt tổ, nhóm chuyên môn, nghiên cứu bài học, chuyên đề, dự giờ, thao giảng và các hoạt động phát triển chuyên môn theo kế hoạch.", "output": "Biên bản sinh hoạt tổ/nhóm", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Biên bản họp tổ chuyên môn", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / GVBM", "mandatory": true, "periodic": false}, {"id": "GVBM-10", "role": "GVBM", "title": "Tham gia đào tạo, bồi dưỡng, tự bồi dưỡng chuyên môn, nghiệp vụ và thực hiện các yêu cầu về phát triển năng lực nghề nghiệp giáo viên.", "output": "Chứng nhận / Báo cáo", "sourceDue": "2026-09-30T00:00:00", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Chứng chỉ, giấy chứng nhận", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / GVBM", "mandatory": true, "periodic": false}, {"id": "GVBM-11", "role": "GVBM", "title": "Ứng dụng công nghệ thông tin, chuyển đổi số, học liệu số, thiết bị và các phương tiện dạy học phù hợp trong quá trình giảng dạy.", "output": "Bài giảng điện tử / Học liệu số", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "Kho học liệu số, LMS", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / GVBM", "mandatory": true, "periodic": false}, {"id": "GVBM-12", "role": "GVBM", "title": "Chủ động đổi mới phương pháp, hình thức tổ chức dạy học, kiểm tra đánh giá và khai thác hiệu quả các nguồn học liệu phục vụ dạy học.", "output": "Sản phẩm đổi mới PPDH", "sourceDue": "2026-09-30T00:00:00", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "Báo cáo chuyên đề, sáng kiến", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / GVBM", "mandatory": true, "periodic": false}, {"id": "GVBM-13", "role": "GVBM", "title": "Tham gia các hoạt động giáo dục, hoặc các nhiệm vụ khác khi được Hiệu trưởng, Phó Hiệu trưởng  phân công.", "output": "Báo cáo kết quả / Kế hoạch", "sourceDue": "", "kind": "Đột xuất", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Minh chứng phân công", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / GVBM", "mandatory": false, "periodic": false}, {"id": "GVBM-14", "role": "GVBM", "title": "Tham gia các hoạt động giáo dục, hoặc các nhiệm vụ chuyên môn khác khi được Sở Giáo dục phân công.", "output": "Biên bản kiểm tra / Báo cáo", "sourceDue": "", "kind": "Đột xuất", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "QĐ/Hồ sơ thực hiện nhiệm vụ", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / GVBM", "mandatory": false, "periodic": false}, {"id": "GVCN-1", "role": "GVCN", "title": "Xây dựng và thực hiện kế hoạch công tác chủ nhiệm, kế hoạch giáo dục của lớp phù hợp với kế hoạch giáo dục nhà trường.", "output": "Kế hoạch công tác chủ nhiệm", "sourceDue": "2026-08-30T00:00:00", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Văn bản ban hành và hồ sơ trình", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / GVCN", "mandatory": true, "periodic": false}, {"id": "GVCN-2", "role": "GVCN", "title": "Nắm bắt, cập nhật và quản lý đầy đủ, chính xác thông tin về học sinh thuộc lớp chủ nhiệm; kịp thời phát hiện những vấn đề cần quan tâm, hỗ trợ.", "output": "Hồ sơ thông tin học sinh", "sourceDue": "2026-08-30T00:00:00", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Sổ chủ nhiệm / CSDL học sinh", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / GVCN", "mandatory": true, "periodic": false}, {"id": "GVCN-3", "role": "GVCN", "title": "Theo dõi thường xuyên tình hình chuyên cần, học tập, rèn luyện, ý thức chấp hành nội quy và sự tiến bộ của từng học sinh.", "output": "Sổ theo dõi chuyên cần", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Sổ đầu bài / Sổ điểm danh", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / GVCN", "mandatory": true, "periodic": false}, {"id": "GVCN-4", "role": "GVCN", "title": "Tổ chức tiết sinh hoạt lớp và các hoạt động giáo dục tập thể theo kế hoạch; xây dựng tập thể lớp đoàn kết, tích cực, tự quản và có ý thức trách nhiệm.", "output": "Biên bản sinh hoạt lớp", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Giáo án HĐTN-HN / Sổ chủ nhiệm", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / GVCN", "mandatory": true, "periodic": false}, {"id": "GVCN-5", "role": "GVCN", "title": "Hướng dẫn ban cán sự lớp tổ chức, điều hành và quản lý các hoạt động của lớp; phát huy vai trò tự quản của học sinh.", "output": "Sổ tay cán sự lớp", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Sổ phân công nhiệm vụ lớp", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / GVCN", "mandatory": true, "periodic": false}, {"id": "GVCN-6", "role": "GVCN", "title": "Tư vấn, hỗ trợ ban đầu đối với học sinh gặp khó khăn trong học tập, tâm lý, quan hệ xã hội; phối hợp với nhà trường, cha mẹ học sinh và các lực lượng có liên quan khi cần thiết.", "output": "Nhật ký tư vấn tâm lý", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Biên bản tư vấn / Sổ theo dõi", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / GVCN", "mandatory": true, "periodic": false}, {"id": "GVCN-7", "role": "GVCN", "title": "Chủ động thực hiện các biện pháp hỗ trợ đối với học sinh có nguy cơ bỏ học, vi phạm nội quy, sa sút trong học tập hoặc rèn luyện; theo dõi kết quả và báo cáo nhà trường theo quy định.", "output": "Hồ sơ hỗ trợ HS cá biệt", "sourceDue": "2026-09-30T00:00:00", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "Biên bản làm việc với PHHS, BGH", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / GVCN", "mandatory": true, "periodic": false}, {"id": "GVCN-8", "role": "GVCN", "title": "Phối hợp với giáo viên bộ môn trong theo dõi, quản lý, giáo dục và hỗ trợ học sinh; trao đổi kịp thời những vấn đề phát sinh liên quan đến học sinh.", "output": "Biên bản phối hợp GVBM", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Sổ ghi chép / Sổ liên lạc", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / GVCN", "mandatory": true, "periodic": false}, {"id": "GVCN-9", "role": "GVCN", "title": "Phối hợp, trao đổi thường xuyên với cha mẹ học sinh về tình hình học tập, rèn luyện, chuyên cần và những vấn đề cần phối hợp giáo dục học sinh.", "output": "Sổ liên lạc PHHS", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Nhật ký trao đổi, ứng dụng SLLĐT", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / GVCN", "mandatory": true, "periodic": false}, {"id": "GVCN-10", "role": "GVCN", "title": "Tổ chức họp cha mẹ học sinh theo kế hoạch của nhà trường; thực hiện đầy đủ nội dung, bảo đảm đúng quy định và hiệu quả phối hợp giáo dục.", "output": "Biên bản họp PHHS", "sourceDue": "2026-09-30T00:00:00", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Biên bản họp, danh sách điểm danh", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / GVCN", "mandatory": true, "periodic": false}, {"id": "GVCN-11", "role": "GVCN", "title": "Hướng dẫn, quản lý học sinh tham gia hoạt động trải nghiệm, hướng nghiệp và các hoạt động giáo dục khác theo kế hoạch của nhà trường.", "output": "Báo cáo hoạt động trải nghiệm", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Kế hoạch, Hình ảnh minh chứng", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / GVCN", "mandatory": true, "periodic": false}, {"id": "GVCN-12", "role": "GVCN", "title": "Tổng hợp thông tin, nhận xét và thực hiện đánh giá kết quả rèn luyện của học sinh cuối học kỳ, cuối năm học theo quy định; bảo đảm khách quan, chính xác và đúng thời hạn.", "output": "Kết quả đánh giá rèn luyện", "sourceDue": "2026-09-30T00:00:00", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Bảng tổng hợp xếp loại trên vnedu", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / GVCN", "mandatory": true, "periodic": false}, {"id": "GVCN-13", "role": "GVCN", "title": "Hướng dẫn học sinh thực hiện quy trình bình xét, đề nghị khen thưởng; tổng hợp và báo cáo kết quả theo quy định của nhà trường.", "output": "Biên bản xét khen thưởng", "sourceDue": "2026-09-30T00:00:00", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Hồ sơ đề nghị khen thưởng", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / GVCN", "mandatory": true, "periodic": false}, {"id": "GVCN-14", "role": "GVCN", "title": "Tổng hợp, lập danh sách và đề xuất việc lên lớp, không lên lớp, rèn luyện trong kỳ nghỉ hè và các nội dung liên quan đến kết quả giáo dục học sinh theo quy định.", "output": "Danh sách xét duyệt", "sourceDue": "2026-09-30T00:00:00", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Biên bản họp xét duyệt cuối năm/hè", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / GVCN", "mandatory": true, "periodic": false}, {"id": "GVCN-15", "role": "GVCN", "title": "Cập nhật, hoàn thiện học bạ và hồ sơ học sinh của lớp chủ nhiệm đầy đủ, chính xác, đúng thời hạn; thực hiện quản lý, bảo quản thông tin, hồ sơ học sinh theo quy định.", "output": "Học bạ học sinh", "sourceDue": "2026-09-30T00:00:00", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Hồ sơ học bạ hoàn thiện", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / GVCN", "mandatory": true, "periodic": false}, {"id": "GVCN-16", "role": "GVCN", "title": "Thực hiện đầy đủ, chính xác và đúng thời hạn các báo cáo định kỳ, đột xuất về tình hình lớp, học sinh và công tác chủ nhiệm theo yêu cầu của nhà trường.", "output": "Báo cáo tổng hợp/đột xuất", "sourceDue": "2026-09-30T00:00:00", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Văn bản báo cáo / Biểu mẫu", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / GVCN", "mandatory": true, "periodic": false}, {"id": "TTCM-1", "role": "TTCM", "title": "Tham gia xây dựng kế hoạch giáo dục của nhà trường theo lĩnh vực chuyên môn được phân công.", "output": "Kế hoạch giáo dục nhà trường", "sourceDue": "2026-08-30T00:00:00", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "Văn bản Kế hoạch trường", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / TTCM", "mandatory": true, "periodic": false}, {"id": "TTCM-2", "role": "TTCM", "title": "Xây dựng và tổ chức thực hiện kế hoạch giáo dục của tổ chuyên môn; chịu trách nhiệm về tiến độ, chất lượng và hiệu quả thực hiện kế hoạch của tổ.", "output": "Kế hoạch tổ chuyên môn", "sourceDue": "2026-08-30T00:00:00", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "Kế hoạch tổ được duyệt", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / TTCM", "mandatory": true, "periodic": false}, {"id": "TTCM-3", "role": "TTCM", "title": "Tham mưu, đề xuất với Hiệu trưởng việc phân công giáo viên giảng dạy, làm công tác chủ nhiệm và thực hiện các nhiệm vụ chuyên môn khác phù hợp với năng lực, chuyên môn và yêu cầu của nhà trường.", "output": "Phiếu/Văn bản đề xuất", "sourceDue": "2026-08-30T00:00:00", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Tờ trình đề xuất BGH", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / TTCM", "mandatory": true, "periodic": false}, {"id": "TTCM-4", "role": "TTCM", "title": "Đề xuất lựa chọn, sử dụng tài liệu giáo dục, học liệu và xuất bản phẩm tham khảo phục vụ hoạt động dạy học theo quy định.", "output": "Danh mục tài liệu đề xuất", "sourceDue": "2026-08-30T00:00:00", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Biên bản họp tổ đề xuất", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / TTCM", "mandatory": true, "periodic": false}, {"id": "TTCM-5", "role": "TTCM", "title": "Hướng dẫn thành viên xây dựng, thực hiện và điều chỉnh kế hoạch giáo dục môn học, kế hoạch bài dạy và các nhiệm vụ chuyên môn theo yêu cầu.", "output": "Biên bản / Hướng dẫn", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Biên bản sinh hoạt chuyên môn", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / TTCM", "mandatory": true, "periodic": false}, {"id": "TTCM-6", "role": "TTCM", "title": "Tổ chức sinh hoạt tổ chuyên môn theo quy định; sinh hoạt chuyên môn theo NCBH bảo đảm nội dung sinh hoạt thiết thực, hiệu quả và gắn với nâng cao chất lượng dạy học.", "output": "Biên bản họp tổ", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Sổ biên bản sinh hoạt tổ", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / TTCM", "mandatory": true, "periodic": false}, {"id": "TTCM-7", "role": "TTCM", "title": "Tổ chức hội giảng, chuyên đề đổi mới phương pháp dạy học, ứng dụng công nghệ số cấp tổ/trường", "output": "Kế hoạch & Báo cáo kết quả chuyên đề", "sourceDue": "Theo lịch", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Kế hoạch, Biên bản dự giờ", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / TTCM", "mandatory": true, "periodic": false}, {"id": "TTCM-8", "role": "TTCM", "title": "Theo dõi, đôn đốc tiến độ thực hiện chương trình, kế hoạch giáo dục và các nhiệm vụ chuyên môn của thành viên trong tổ; kịp thời báo cáo, đề xuất xử lý những vấn đề phát sinh.", "output": "Báo cáo tiến độ", "sourceDue": "Hằng tuần/tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Nhật ký tổ trưởng, Sổ theo dõi", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / TTCM", "mandatory": true, "periodic": false}, {"id": "TTCM-9", "role": "TTCM", "title": "Kiểm tra hồ sơ, sản phẩm chuyên môn của thành viên theo kế hoạch; hướng dẫn khắc phục những hạn chế và theo dõi kết quả thực hiện.", "output": "Biên bản kiểm tra hồ sơ", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Biên bản kiểm tra HSSS GV", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / TTCM", "mandatory": true, "periodic": false}, {"id": "TTCM-10", "role": "TTCM", "title": "Phân tích kết quả giáo dục của tổ, xác định những vấn đề cần cải thiện và đề xuất giải pháp nâng cao chất lượng dạy học.", "output": "Báo cáo phân tích chất lượng", "sourceDue": "2026-09-30T00:00:00", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "Báo cáo thống kê, phân tích", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / TTCM", "mandatory": true, "periodic": false}, {"id": "TTCM-11", "role": "TTCM", "title": "Tham mưu đánh giá, xếp loại thi đua viên chức định kỳ quý/năm đối với giáo viên trong tổ", "output": "Bảng đánh giá và phiếu nhận xét", "sourceDue": "2026-09-30T00:00:00", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Bảng đánh giá và phiếu nhận xét", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / TTCM", "mandatory": true, "periodic": false}, {"id": "TTCM-12", "role": "TTCM", "title": "Quản lý, cập nhật và lưu trữ hồ sơ, dữ liệu và minh chứng hoạt động của tổ chuyên môn theo quy định.", "output": "Hồ sơ tổ chuyên môn", "sourceDue": "2026-09-30T00:00:00", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Hệ thống hồ sơ sổ sách tổ", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / TTCM", "mandatory": true, "periodic": false}, {"id": "TTCM-13", "role": "TTCM", "title": "Thực hiện báo cáo định kỳ, sơ kết, tổng kết và các báo cáo đột xuất về hoạt động của tổ chuyên môn theo yêu cầu của Hiệu trưởng.", "output": "Báo cáo chuyên môn tổ", "sourceDue": "2026-09-30T00:00:00", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Báo cáo nộp BGH", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / TTCM", "mandatory": true, "periodic": false}, {"id": "TPCM-1", "role": "TPCM", "title": "Tham gia xây dựng và thực hiện kế hoạch giáo dục của tổ chuyên môn theo lĩnh vực, nhiệm vụ được phân công.", "output": "Kế hoạch giáo dục", "sourceDue": "2026-08-30T00:00:00", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Bản thảo góp ý/Kế hoạch ban hành", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / TPCM", "mandatory": true, "periodic": false}, {"id": "TPCM-2", "role": "TPCM", "title": "Tổ chức triển khai các nhiệm vụ chuyên môn được Tổ trưởng phân công; phối hợp với các thành viên trong tổ để bảo đảm tiến độ và chất lượng thực hiện.", "output": "Kế hoạch triển khai", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Báo cáo tiến độ/Biên bản phối hợp", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / TPCM", "mandatory": true, "periodic": false}, {"id": "TPCM-3", "role": "TPCM", "title": "Theo dõi tiến độ thực hiện chương trình, kế hoạch giáo dục và kết quả giáo dục của môn học, lĩnh vực chuyên môn được phân công; kịp thời báo cáo Tổ trưởng những vấn đề phát sinh.", "output": "Báo cáo tiến độ", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Sổ theo dõi/Nhật ký tổ phó", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / TPCM", "mandatory": true, "periodic": false}, {"id": "TPCM-4", "role": "TPCM", "title": "Hỗ trợ, hướng dẫn thành viên trong tổ xây dựng, thực hiện và điều chỉnh kế hoạch giáo dục môn học, kế hoạch bài dạy và các nhiệm vụ chuyên môn theo yêu cầu.", "output": "Biên bản hướng dẫn", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Biên bản sinh hoạt/Sổ ghi chép", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / TPCM", "mandatory": true, "periodic": false}, {"id": "TPCM-5", "role": "TPCM", "title": "Chuẩn bị nội dung sinh hoạt tổ chuyên môn, chuyên đề, nghiên cứu bài học và các hoạt động chuyên môn khác theo phân công của Tổ trưởng.", "output": "Tài liệu chuyên đề", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Hồ sơ sinh hoạt chuyên môn", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / TPCM", "mandatory": true, "periodic": false}, {"id": "TPCM-6", "role": "TPCM", "title": "Tham gia kiểm tra hồ sơ, sản phẩm chuyên môn của thành viên theo phân công; tổng hợp những nội dung cần điều chỉnh và báo cáo Tổ trưởng để chỉ đạo thực hiện.", "output": "Biên bản kiểm tra", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Phiếu/Biên bản kiểm tra HSSS", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / TPCM", "mandatory": true, "periodic": false}, {"id": "TPCM-7", "role": "TPCM", "title": "Tổng hợp số liệu, hồ sơ, minh chứng và kết quả thực hiện các nhiệm vụ chuyên môn thuộc lĩnh vực được phân công; phục vụ công tác đánh giá, sơ kết, tổng kết và báo cáo của tổ.", "output": "Bảng tổng hợp dữ liệu", "sourceDue": "2026-09-30T00:00:00", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Báo cáo/Biểu mẫu thống kê", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / TPCM", "mandatory": true, "periodic": false}, {"id": "TPCM-8", "role": "TPCM", "title": "Điều hành hoạt động của tổ chuyên môn hoặc các hoạt động chuyên môn cụ thể khi được Tổ trưởng phân công hoặc ủy quyền; bảo đảm hoạt động được thực hiện đúng kế hoạch và quy định.", "output": "Biên bản điều hành", "sourceDue": "Theo phân công", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Biên bản họp do tổ phó chủ trì", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / TPCM", "mandatory": true, "periodic": false}, {"id": "TPCM-9", "role": "TPCM", "title": "Báo cáo Tổ trưởng về tiến độ, kết quả thực hiện nhiệm vụ được giao; đề xuất giải pháp xử lý những khó khăn, vướng mắc trong quá trình thực hiện.", "output": "Báo cáo công tác", "sourceDue": "2026-09-30T00:00:00", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Báo cáo định kỳ nộp Tổ trưởng", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / TPCM", "mandatory": true, "periodic": false}, {"id": "HOANHAP-1", "role": "HOANHAP", "title": "Tham gia xây dựng và thực hiện kế hoạch giáo dục cá nhân đối với học sinh hòa nhập theo hồ sơ, nhu cầu, khả năng của học sinh và sự hướng dẫn của nhà trường.", "output": "Kế hoạch GD cá nhân", "sourceDue": "2026-08-30T00:00:00", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "Hồ sơ kế hoạch giáo dục cá nhân được duyệt", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / HOA NHAP", "mandatory": true, "periodic": false}, {"id": "HOANHAP-2", "role": "HOANHAP", "title": "Hỗ trợ học sinh hòa nhập trong học tập và tham gia các hoạt động giáo dục theo kế hoạch giáo dục cá nhân và nhiệm vụ được phân công; tạo điều kiện để học sinh tham gia phù hợp với khả năng.", "output": "Nhật ký hỗ trợ HS", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Sổ theo dõi/Nhật ký hỗ trợ học sinh", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / HOA NHAP", "mandatory": true, "periodic": false}, {"id": "HOANHAP-3", "role": "HOANHAP", "title": "Phối hợp với giáo viên bộ môn, giáo viên chủ nhiệm và các bộ phận có liên quan trong việc điều chỉnh cách thức hỗ trợ, phương pháp, hình thức tổ chức hoạt động giáo dục phù hợp với nhu cầu của học sinh.", "output": "Biên bản điều chỉnh phương pháp", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Biên bản sinh hoạt chuyên môn / Góp ý", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / HOA NHAP", "mandatory": true, "periodic": false}, {"id": "HOANHAP-4", "role": "HOANHAP", "title": "Theo dõi, ghi nhận và báo cáo sự tiến bộ của học sinh về học tập, khả năng tham gia hoạt động giáo dục và các kỹ năng cần hỗ trợ; kịp thời thông tin những khó khăn phát sinh.", "output": "Báo cáo tiến độ học sinh", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Sổ theo dõi sự tiến bộ / Báo cáo định kỳ", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / HOA NHAP", "mandatory": true, "periodic": false}, {"id": "HOANHAP-5", "role": "HOANHAP", "title": "Phối hợp với cha mẹ học sinh và cơ quan, đơn vị, cá nhân có chuyên môn liên quan trong quá trình hỗ trợ học sinh theo kế hoạch và sự chỉ đạo của nhà trường.", "output": "Biên bản làm việc với PHHS", "sourceDue": "Khi phát sinh", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Biên bản phối hợp gia đình - nhà trường", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / HOA NHAP", "mandatory": true, "periodic": false}, {"id": "HOANHAP-6", "role": "HOANHAP", "title": "Quản lý, cập nhật và bảo mật hồ sơ, thông tin liên quan đến quá trình hỗ trợ học sinh theo quy định; bảo đảm thông tin được sử dụng đúng mục đích.", "output": "Hệ thống hồ sơ bảo mật", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Tủ lưu trữ hồ sơ / Minh chứng bảo mật", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / HOA NHAP", "mandatory": true, "periodic": false}, {"id": "HOANHAP-7", "role": "HOANHAP", "title": "Tổng hợp, báo cáo kết quả thực hiện kế hoạch hỗ trợ và đề xuất điều chỉnh biện pháp hỗ trợ khi cần thiết; thực hiện các nhiệm vụ khác theo phân công của Hiệu trưởng.", "output": "Báo cáo tổng kết hỗ trợ", "sourceDue": "2026-09-30T00:00:00", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Văn bản báo cáo tổng kết nộp Ban Giám hiệu", "source": "1. DANH_MUC_CONG_VIEC(1).xlsx / HOA NHAP", "mandatory": true, "periodic": false}, {"id": "TBTN-1", "role": "TBTN", "title": "Xây dựng và thực hiện kế hoạch quản lý, khai thác, sử dụng thiết bị dạy học, phòng học bộ môn và các phương tiện phục vụ thực hành, thí nghiệm theo kế hoạch của nhà trường.", "output": "Kế hoạch hoạt động", "sourceDue": "30/8/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Văn bản Kế hoạch ban hành", "source": "To_van_phong.xlsx / TBTN", "mandatory": true, "periodic": false}, {"id": "TBTN-2", "role": "TBTN", "title": "Tiếp nhận, phân loại, đánh mã, cập nhật và quản lý hồ sơ thiết bị, dụng cụ, vật tư, hóa chất theo quy định.", "output": "Hồ sơ thiết bị", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Sổ/Hồ sơ tài sản, Biên bản bàn giao", "source": "To_van_phong.xlsx / TBTN", "mandatory": true, "periodic": false}, {"id": "TBTN-3", "role": "TBTN", "title": "3. Sắp xếp, bảo quản thiết bị, dụng cụ, vật tư và hóa chất khoa học, an toàn, thuận tiện cho việc khai thác, sử dụng; thực hiện các yêu cầu về điều kiện bảo quản đối với từng loại thiết bị, vật tư, hóa chất.", "output": "Báo cáo tình trạng", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Hình ảnh phòng máy/kho, Sổ nhật ký", "source": "To_van_phong.xlsx / TBTN", "mandatory": true, "periodic": false}, {"id": "TBTN-4", "role": "TBTN", "title": "Thực hiện cấp phát, cho mượn, thu hồi thiết bị, dụng cụ, vật tư phục vụ dạy học; ghi nhận đầy đủ việc giao nhận và tình trạng thiết bị theo quy định.", "output": "Sổ mượn - trả", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Sổ mượn/trả thiết bị có ký nhận", "source": "To_van_phong.xlsx / TBTN", "mandatory": true, "periodic": false}, {"id": "TBTN-5", "role": "TBTN", "title": "Phối hợp với giáo viên chuẩn bị thiết bị, dụng cụ, hóa chất và vật liệu cần thiết phục vụ các tiết thực hành, thí nghiệm và hoạt động dạy học có sử dụng thiết bị.", "output": "Phiếu chuẩn bị", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Phiếu đăng ký thực hành của GV", "source": "To_van_phong.xlsx / TBTN", "mandatory": true, "periodic": false}, {"id": "TBTN-6", "role": "TBTN", "title": "Hỗ trợ giáo viên trong việc sử dụng thiết bị, dụng cụ và tổ chức các hoạt động thực hành, thí nghiệm; bảo đảm các yêu cầu về an toàn trong quá trình thực hiện.", "output": "Sổ nhật ký phòng bộ môn", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Sổ theo dõi tiết thực hành", "source": "To_van_phong.xlsx / TBTN", "mandatory": true, "periodic": false}, {"id": "TBTN-7", "role": "TBTN", "title": "Theo dõi, tổng hợp tình hình khai thác, sử dụng thiết bị của các tổ chuyên môn; kịp thời báo cáo những thiết bị chưa được khai thác, sử dụng chưa hiệu quả hoặc có nguy cơ mất an toàn.", "output": "Báo cáo sử dụng", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Bảng thống kê tần suất sử dụng", "source": "To_van_phong.xlsx / TBTN", "mandatory": true, "periodic": false}, {"id": "TBTN-8", "role": "TBTN", "title": "Kiểm tra tình trạng, vệ sinh, bảo dưỡng và thực hiện các thao tác sửa chữa đơn giản đối với thiết bị trong phạm vi chuyên môn; báo cáo, đề xuất xử lý đối với thiết bị hư hỏng vượt quá khả năng thực hiện.", "output": "Sổ bảo trì", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Sổ theo dõi bảo trì, bảo dưỡng", "source": "To_van_phong.xlsx / TBTN", "mandatory": true, "periodic": false}, {"id": "TBTN-9", "role": "TBTN", "title": "9. Tham mưu, đề xuất sửa chữa, mua sắm, bổ sung, thay thế thiết bị, dụng cụ, vật tư và hóa chất phục vụ dạy học, thực hành, thí nghiệm theo nhu cầu thực tế.", "output": "Tờ trình mua sắm", "sourceDue": "Khi phát sinh", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Tờ trình/Biên bản đề xuất", "source": "To_van_phong.xlsx / TBTN", "mandatory": true, "periodic": false}, {"id": "TBTN-10", "role": "TBTN", "title": "Tham mưu, đề xuất xử lý, thanh lý hoặc tiêu hủy thiết bị, vật tư, hóa chất hư hỏng, không còn khả năng sử dụng hoặc hết hạn theo quy định và theo quyết định của cấp có thẩm quyền.", "output": "Tờ trình thanh lý", "sourceDue": "30/9/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Danh mục đề nghị thanh lý", "source": "To_van_phong.xlsx / TBTN", "mandatory": true, "periodic": false}, {"id": "TBTN-11", "role": "TBTN", "title": "Thực hiện và kiểm soát các yêu cầu về an toàn, phòng cháy, chữa cháy, bảo quản và sử dụng hóa chất trong phòng học bộ môn, kho thiết bị và các khu vực thực hành, thí nghiệm theo quy định.", "output": "Biên bản kiểm tra an toàn", "sourceDue": "Thường xuyên", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "Hồ sơ PCCC, Sổ theo dõi hóa chất độc hại", "source": "To_van_phong.xlsx / TBTN", "mandatory": true, "periodic": false}, {"id": "TBTN-12", "role": "TBTN", "title": "Quản trị, cập nhật và khai thác phần mềm, hệ thống dữ liệu quản lý thiết bị; bảo đảm thông tin về số lượng, tình trạng, vị trí và quá trình sử dụng thiết bị được cập nhật đầy đủ, chính xác.", "output": "Dữ liệu phần mềm", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Dữ liệu xuất từ phần mềm", "source": "To_van_phong.xlsx / TBTN", "mandatory": true, "periodic": false}, {"id": "TBTN-13", "role": "TBTN", "title": "Tổ chức hoặc phối hợp với giáo viên, tổ chuyên môn trong việc làm, cải tiến và khai thác đồ dùng dạy học, thiết bị dạy học tự làm phù hợp với yêu cầu môn học và điều kiện thực tế của nhà trường.", "output": "Sản phẩm ĐDDH", "sourceDue": "30/9/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "Kế hoạch/Biên bản nghiệm thu ĐDDH", "source": "To_van_phong.xlsx / TBTN", "mandatory": true, "periodic": false}, {"id": "TBTN-14", "role": "TBTN", "title": "Thực hiện kiểm kê định kỳ, đột xuất; đối chiếu số liệu thực tế với hồ sơ, sổ sách và phần mềm quản lý; tổng hợp, báo cáo tình hình quản lý, sử dụng thiết bị, phòng học bộ môn và công tác thực hành, thí nghiệm theo yêu cầu của Hiệu trưởng.", "output": "Biên bản kiểm kê", "sourceDue": "30/9/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Biên bản kiểm kê tài sản/thiết bị", "source": "To_van_phong.xlsx / TBTN", "mandatory": true, "periodic": false}, {"id": "TVIEN-1", "role": "TVIEN", "title": "Xây dựng và thực hiện kế hoạch hoạt động, phát triển thư viện phù hợp với kế hoạch giáo dục và điều kiện thực tế của nhà trường.", "output": "Kế hoạch hoạt động", "sourceDue": "30/8/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Kế hoạch được phê duyệt", "source": "To_van_phong.xlsx / T.VIEN", "mandatory": true, "periodic": false}, {"id": "TVIEN-2", "role": "TVIEN", "title": "Tiếp nhận, đăng ký, phân loại, biên mục và cập nhật tài nguyên thông tin theo quy định.", "output": "Sổ đăng ký tổng quát", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Sổ sách đăng ký thư viện", "source": "To_van_phong.xlsx / T.VIEN", "mandatory": true, "periodic": false}, {"id": "TVIEN-3", "role": "TVIEN", "title": "Sắp xếp, bảo quản và quản lý kho sách, báo, tài liệu và các nguồn tài nguyên thông tin của thư viện khoa học, an toàn, thuận tiện cho việc khai thác, sử dụng.", "output": "Kho sách gọn gàng", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Hình ảnh kho/Sổ quản lý", "source": "To_van_phong.xlsx / T.VIEN", "mandatory": true, "periodic": false}, {"id": "TVIEN-4", "role": "TVIEN", "title": "Thực hiện cho mượn, thu hồi, gia hạn và theo dõi tình hình sử dụng tài liệu; cập nhật đầy đủ dữ liệu mượn, trả theo quy định.", "output": "Sổ mượn - trả", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Sổ mượn/trả tài liệu", "source": "To_van_phong.xlsx / T.VIEN", "mandatory": true, "periodic": false}, {"id": "TVIEN-5", "role": "TVIEN", "title": "Quản lý, cấp phát, thu hồi và theo dõi việc sử dụng sách giáo khoa, tài liệu dùng chung và các tài liệu phục vụ dạy học theo kế hoạch của nhà trường.", "output": "Sổ cấp phát SGK", "sourceDue": "30/9/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Sổ cấp phát có ký nhận", "source": "To_van_phong.xlsx / T.VIEN", "mandatory": true, "periodic": false}, {"id": "TVIEN-6", "role": "TVIEN", "title": "Hướng dẫn giáo viên, học sinh tra cứu, khai thác và sử dụng hiệu quả các nguồn tài nguyên thông tin, dịch vụ và không gian thư viện.", "output": "Bảng hướng dẫn", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Sổ nhật ký hoạt động", "source": "To_van_phong.xlsx / T.VIEN", "mandatory": true, "periodic": false}, {"id": "TVIEN-7", "role": "TVIEN", "title": "Giới thiệu sách, tài liệu mới và các nguồn tài nguyên thông tin phù hợp với môn học, chủ đề giáo dục và nhu cầu học tập của giáo viên, học sinh.", "output": "Thư mục/Bài viết", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Bản tin thư viện/Thư mục", "source": "To_van_phong.xlsx / T.VIEN", "mandatory": true, "periodic": false}, {"id": "TVIEN-8", "role": "TVIEN", "title": "Tổ chức hoặc phối hợp tổ chức các hoạt động phát triển văn hóa đọc, giới thiệu sách, ngày hội đọc sách và các hoạt động hưởng ứng Ngày Sách và Văn hóa đọc Việt Nam.", "output": "Kế hoạch sự kiện", "sourceDue": "Theo kế hoạch", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "Hồ sơ tổ chức sự kiện", "source": "To_van_phong.xlsx / T.VIEN", "mandatory": true, "periodic": false}, {"id": "TVIEN-9", "role": "TVIEN", "title": "Phối hợp với giáo viên và tổ chuyên môn tổ chức các hoạt động dạy học, giáo dục, nghiên cứu và trải nghiệm tại thư viện phù hợp với kế hoạch giáo dục của nhà trường.", "output": "Lịch đăng ký", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "Sổ theo dõi tiết dạy/học", "source": "To_van_phong.xlsx / T.VIEN", "mandatory": true, "periodic": false}, {"id": "TVIEN-10", "role": "TVIEN", "title": "Quản lý, cập nhật, khai thác tài nguyên thông tin số và phần mềm quản lý thư viện; bảo đảm dữ liệu được cập nhật đầy đủ, chính xác.", "output": "Dữ liệu phần mềm", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Dữ liệu trích xuất phần mềm", "source": "To_van_phong.xlsx / T.VIEN", "mandatory": true, "periodic": false}, {"id": "TVIEN-11", "role": "TVIEN", "title": "Thực hiện kết nối, chia sẻ và khai thác dữ liệu, tài nguyên thông tin thư viện theo các chương trình, hệ thống và quy định hiện hành.", "output": "Báo cáo kết nối", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Báo cáo/Minh chứng liên thông", "source": "To_van_phong.xlsx / T.VIEN", "mandatory": true, "periodic": false}, {"id": "TVIEN-12", "role": "TVIEN", "title": "Kiểm tra tình trạng tài liệu; thực hiện bảo quản, phục chế trong phạm vi khả năng; đề xuất bổ sung, thay thế hoặc đưa ra khỏi kho những tài liệu hư hỏng, không còn phù hợp theo quy định.", "output": "Biên bản/Tờ trình", "sourceDue": "30/9/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Biên bản đề xuất thanh lý", "source": "To_van_phong.xlsx / T.VIEN", "mandatory": true, "periodic": false}, {"id": "TVIEN-13", "role": "TVIEN", "title": "Thực hiện kiểm kê tài nguyên thông tin, cơ sở vật chất và các tài sản thuộc thư viện; tự đánh giá hoạt động thư viện theo tiêu chuẩn, tiêu chí và hướng dẫn hiện hành.", "output": "Biên bản tự đánh giá", "sourceDue": "30/9/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Biên bản kiểm kê, tự đánh giá", "source": "To_van_phong.xlsx / T.VIEN", "mandatory": true, "periodic": false}, {"id": "TVIEN-14", "role": "TVIEN", "title": "Thực hiện thống kê, tổng hợp số liệu, lưu trữ minh chứng và báo cáo định kỳ, đột xuất về hoạt động thư viện theo yêu cầu của Hiệu trưởng.", "output": "Báo cáo hoạt động", "sourceDue": "30/9/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Văn bản báo cáo lưu trữ", "source": "To_van_phong.xlsx / T.VIEN", "mandatory": true, "periodic": false}, {"id": "TVTL-1", "role": "TVTL", "title": "Xây dựng và thực hiện kế hoạch tư vấn học sinh, tư vấn học đường và công tác xã hội hằng năm phù hợp với kế hoạch giáo dục của nhà trường.", "output": "Kế hoạch hoạt động", "sourceDue": "30/8/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Văn bản Kế hoạch ban hành", "source": "To_van_phong.xlsx / TVTL", "mandatory": true, "periodic": false}, {"id": "TVTL-2", "role": "TVTL", "title": "Thiết lập, quản lý và vận hành các kênh tiếp nhận thông tin, nhu cầu hỗ trợ, tư vấn của học sinh; bảo đảm thuận tiện, phù hợp và an toàn.", "output": "Kênh thông tin/Sổ tay", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Link kênh trực tuyến/Sổ tiếp nhận", "source": "To_van_phong.xlsx / TVTL", "mandatory": true, "periodic": false}, {"id": "TVTL-3", "role": "TVTL", "title": "Tổ chức tư vấn, hỗ trợ học sinh bằng hình thức trực tiếp hoặc trực tuyến phù hợp với nội dung, nhu cầu và điều kiện thực tế.", "output": "Biên bản tư vấn", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Sổ nhật ký tư vấn (bảo mật)", "source": "To_van_phong.xlsx / TVTL", "mandatory": true, "periodic": false}, {"id": "TVTL-4", "role": "TVTL", "title": "Tư vấn, hỗ trợ học sinh về học tập, tâm lý, quan hệ xã hội, kỹ năng ứng xử, kỹ năng sống và những vấn đề liên quan đến quá trình học tập, rèn luyện.", "output": "Hồ sơ ca tư vấn", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Phiếu ghi nhận/Hồ sơ ca", "source": "To_van_phong.xlsx / TVTL", "mandatory": true, "periodic": false}, {"id": "TVTL-5", "role": "TVTL", "title": "Tư vấn, hỗ trợ hoặc tổ chức truyền thông, giáo dục phù hợp về giới, sức khỏe sinh sản, hướng nghiệp, lựa chọn nghề nghiệp, việc làm và khởi nghiệp theo chương trình, kế hoạch của nhà trường.", "output": "Tài liệu truyền thông", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "Hồ sơ chuyên đề/Hình ảnh sự kiện", "source": "To_van_phong.xlsx / TVTL", "mandatory": true, "periodic": false}, {"id": "TVTL-6", "role": "TVTL", "title": "Chủ động rà soát, tiếp nhận thông tin và phát hiện sớm học sinh có nguy cơ gặp khó khăn về tâm lý, học tập, quan hệ xã hội hoặc hoàn cảnh gia đình để kịp thời hỗ trợ.", "output": "Báo cáo rà soát", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Danh sách sàng lọc/Báo cáo", "source": "To_van_phong.xlsx / TVTL", "mandatory": true, "periodic": false}, {"id": "TVTL-7", "role": "TVTL", "title": "Phối hợp với giáo viên chủ nhiệm, giáo viên bộ môn, cha mẹ học sinh và các bộ phận có liên quan trong việc tư vấn, hỗ trợ học sinh; bảo đảm thông tin được trao đổi phù hợp với quy định về bảo mật.", "output": "Biên bản làm việc", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Biên bản họp với GV, PHHS", "source": "To_van_phong.xlsx / TVTL", "mandatory": true, "periodic": false}, {"id": "TVTL-8", "role": "TVTL", "title": "Tham mưu, phối hợp chuyển gửi học sinh đến cơ sở, cá nhân hoặc đơn vị có chuyên môn phù hợp khi vấn đề vượt quá khả năng tư vấn, hỗ trợ của nhà trường.", "output": "Hồ sơ chuyển tuyến", "sourceDue": "Khi phát sinh", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "Giấy giới thiệu/Biên bản chuyển ca", "source": "To_van_phong.xlsx / TVTL", "mandatory": true, "periodic": false}, {"id": "TVTL-9", "role": "TVTL", "title": "Tổ chức hoặc phối hợp tổ chức các hoạt động truyền thông, giáo dục phòng ngừa, nâng cao nhận thức và hỗ trợ phát triển toàn diện về tâm lý, kỹ năng, quan hệ xã hội cho học sinh.", "output": "Kế hoạch/Báo cáo", "sourceDue": "Theo lịch", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "Hồ sơ tổ chức sự kiện toàn trường", "source": "To_van_phong.xlsx / TVTL", "mandatory": true, "periodic": false}, {"id": "TVTL-10", "role": "TVTL", "title": "Quản lý, cập nhật và lưu trữ hồ sơ tư vấn, hỗ trợ học sinh; bảo đảm nguyên tắc bảo mật thông tin, tôn trọng quyền riêng tư và bảo vệ học sinh theo quy định.", "output": "Hồ sơ lưu trữ", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Hệ thống tủ/file hồ sơ bảo mật", "source": "To_van_phong.xlsx / TVTL", "mandatory": true, "periodic": false}, {"id": "TVTL-11", "role": "TVTL", "title": "Theo dõi kết quả hỗ trợ, tiếp nhận phản hồi và thực hiện hỗ trợ tiếp nối đối với học sinh khi cần thiết; báo cáo những trường hợp cần sự chỉ đạo, phối hợp của nhà trường.", "output": "Phiếu theo dõi", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Nhật ký đánh giá sự tiến bộ", "source": "To_van_phong.xlsx / TVTL", "mandatory": true, "periodic": false}, {"id": "TVTL-12", "role": "TVTL", "title": "Thực hiện thống kê, tổng hợp, lưu trữ minh chứng và báo cáo định kỳ, đột xuất về công tác tư vấn học sinh, tư vấn học đường và công tác xã hội theo yêu cầu của Hiệu trưởng.", "output": "Báo cáo tổng hợp", "sourceDue": "30/9/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Báo cáo lưu trữ nộp BGH", "source": "To_van_phong.xlsx / TVTL", "mandatory": true, "periodic": false}, {"id": "GIAOVU-1", "role": "GIAOVU", "title": "Xây dựng và thực hiện kế hoạch công tác giáo vụ theo kế hoạch giáo dục và yêu cầu quản lý của nhà trường.", "output": "Kế hoạch công tác", "sourceDue": "30/8/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Văn bản Kế hoạch được duyệt", "source": "To_van_phong.xlsx / GIÁO VỤ", "mandatory": true, "periodic": false}, {"id": "GIAOVU-2", "role": "GIAOVU", "title": "Quản lý, cập nhật và lưu trữ hồ sơ, sổ sách, dữ liệu liên quan đến học sinh theo quy định.", "output": "Hồ sơ học sinh", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Hệ thống sổ sách/Hồ sơ lưu trữ", "source": "To_van_phong.xlsx / GIÁO VỤ", "mandatory": true, "periodic": false}, {"id": "GIAOVU-3", "role": "GIAOVU", "title": "Phối hợp thực hiện công tác tuyển sinh, tiếp nhận học sinh, chuyển trường, chuyển lớp và các thủ tục liên quan theo phân công của Hiệu trưởng.", "output": "Hồ sơ thuyên chuyển", "sourceDue": "Khi phát sinh", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Quyết định/Hồ sơ rút-nhập học", "source": "To_van_phong.xlsx / GIÁO VỤ", "mandatory": true, "periodic": false}, {"id": "GIAOVU-4", "role": "GIAOVU", "title": "Phối hợp thực hiện các nhiệm vụ liên quan đến kiểm tra, thi, xét kết quả học tập và rèn luyện của học sinh theo kế hoạch và quy định.", "output": "Hồ sơ thi/kiểm tra", "sourceDue": "Theo lịch thi", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Danh sách phòng thi, Bảng điểm", "source": "To_van_phong.xlsx / GIÁO VỤ", "mandatory": true, "periodic": false}, {"id": "GIAOVU-5", "role": "GIAOVU", "title": "Theo dõi, rà soát tính đầy đủ, thống nhất và chính xác của dữ liệu về học tập, rèn luyện và quá trình học tập của học sinh; kịp thời báo cáo những trường hợp có sai lệch hoặc bất thường.", "output": "Báo cáo rà soát", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Biên bản đối chiếu/Báo cáo rà soát", "source": "To_van_phong.xlsx / GIÁO VỤ", "mandatory": true, "periodic": false}, {"id": "GIAOVU-6", "role": "GIAOVU", "title": "Phối hợp với giáo viên chủ nhiệm, giáo viên bộ môn và các bộ phận có liên quan trong việc cập nhật, theo dõi tình hình học sinh hằng ngày.", "output": "Dữ liệu hằng ngày", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Dữ liệu trên hệ thống sổ liên lạc", "source": "To_van_phong.xlsx / GIÁO VỤ", "mandatory": true, "periodic": false}, {"id": "GIAOVU-7", "role": "GIAOVU", "title": "Tổng hợp kết quả học tập, rèn luyện và các dữ liệu giáo dục của học sinh đúng thời hạn; bảo đảm số liệu thống nhất giữa hồ sơ và hệ thống dữ liệu của nhà trường.", "output": "Bảng tổng hợp", "sourceDue": "Cuối kỳ/30/09", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Bảng tổng hợp điểm trên hệ thống", "source": "To_van_phong.xlsx / GIÁO VỤ", "mandatory": true, "periodic": false}, {"id": "GIAOVU-8", "role": "GIAOVU", "title": "Cung cấp, tổng hợp số liệu về học sinh phục vụ công tác quản lý, thống kê, báo cáo và các yêu cầu nghiệp vụ của nhà trường theo phân công.", "output": "Báo cáo số liệu", "sourceDue": "Khi có yêu cầu", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Biểu mẫu thống kê/File dữ liệu", "source": "To_van_phong.xlsx / GIÁO VỤ", "mandatory": true, "periodic": false}, {"id": "GIAOVU-9", "role": "GIAOVU", "title": "Quản lý, cập nhật và lưu trữ hồ sơ giáo vụ, dữ liệu học sinh trên các hệ thống quản lý được nhà trường sử dụng; bảo đảm an toàn và bảo mật thông tin theo quy định.", "output": "Dữ liệu hệ thống", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Lịch sử cập nhật CSDL/Enetviet/LMS", "source": "To_van_phong.xlsx / GIÁO VỤ", "mandatory": true, "periodic": false}, {"id": "GIAOVU-10", "role": "GIAOVU", "title": "Thực hiện thống kê, tổng hợp, lưu trữ minh chứng và báo cáo định kỳ, đột xuất về công tác giáo vụ theo yêu cầu của Hiệu trưởng.", "output": "Văn bản báo cáo", "sourceDue": "30/9/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Văn bản báo cáo nộp BGH", "source": "To_van_phong.xlsx / GIÁO VỤ", "mandatory": true, "periodic": false}, {"id": "GIAOVU-11", "role": "GIAOVU", "title": "Thực hiện hồ sơ nâng lương thường xuyên, nâng lương trước thời hạn", "output": "Văn bản báo cáo", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Văn bản báo cáo nộp BGH", "source": "To_van_phong.xlsx / GIÁO VỤ", "mandatory": true, "periodic": false}, {"id": "QS-1", "role": "QS", "title": "Theo dõi tình hình chuyên cần, việc ra vào trường và sự có mặt của học sinh theo thời gian, khu vực và nhiệm vụ được phân công.", "output": "Sổ trực ban", "sourceDue": "Hằng ngày", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Sổ trực ban/Sổ điểm danh cổng", "source": "To_van_phong.xlsx / QS", "mandatory": true, "periodic": false}, {"id": "QS-2", "role": "QS", "title": "Theo dõi việc chấp hành nội quy, quy định của nhà trường, đồng phục, tác phong và nền nếp học sinh.", "output": "Sổ ghi chép", "sourceDue": "Hằng ngày", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "file báo cáo", "source": "To_van_phong.xlsx / QS", "mandatory": true, "periodic": false}, {"id": "QS-3", "role": "QS", "title": "Kiểm tra, ghi nhận tình hình nền nếp đầu buổi, trong giờ chuyển tiết, giờ ra chơi và các thời điểm tập trung học sinh theo phân công.", "output": "Nhật ký trực", "sourceDue": "Hằng ngày", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Nhật ký tuần tra các khu vực", "source": "To_van_phong.xlsx / QS", "mandatory": true, "periodic": false}, {"id": "QS-4", "role": "QS", "title": "Tiếp nhận, ghi nhận và cập nhật thông tin về học sinh đi trễ, xin ra khỏi trường, xin về sớm, nghỉ học hoặc vắng mặt theo quy định của nhà trường.", "output": "Phiếu/Sổ ghi nhận", "sourceDue": "Hằng ngày", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Sổ theo dõi trễ/về sớm", "source": "To_van_phong.xlsx / QS", "mandatory": true, "periodic": false}, {"id": "QS-5", "role": "QS", "title": "Ghi nhận đầy đủ, khách quan các trường hợp học sinh có biểu hiện vi phạm nội quy, quy định hoặc gây mất trật tự, an toàn trong phạm vi được phân công.", "output": "Biên bản vi phạm", "sourceDue": "Khi phát sinh", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Sổ trực/Biên bản vụ việc", "source": "To_van_phong.xlsx / QS", "mandatory": true, "periodic": false}, {"id": "QS-6", "role": "QS", "title": "Thông báo kịp thời cho giáo viên chủ nhiệm và bộ phận có liên quan về tình hình chuyên cần, nền nếp và các vụ việc phát sinh của học sinh.", "output": "Thông báo", "sourceDue": "Hằng ngày", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Tin nhắn/Sổ liên lạc", "source": "To_van_phong.xlsx / QS", "mandatory": true, "periodic": false}, {"id": "QS-7", "role": "QS", "title": "Phối hợp với giáo viên chủ nhiệm, giáo vụ, cha mẹ học sinh và các bộ phận có liên quan trong việc xác minh thông tin, làm rõ vụ việc và hỗ trợ học sinh theo chỉ đạo của nhà trường.", "output": "Biên bản làm việc", "sourceDue": "Khi phát sinh", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Biên bản làm việc với PHHS/GVCN", "source": "To_van_phong.xlsx / QS", "mandatory": true, "periodic": false}, {"id": "QS-8", "role": "QS", "title": "Thực hiện các biện pháp hỗ trợ, ổn định tình hình ban đầu đối với các vụ việc liên quan đến trật tự, an toàn học sinh; kịp thời báo cáo giáo viên chủ nhiệm hoặc Ban Giám hiệu khi vụ việc vượt quá phạm vi nhiệm vụ.", "output": "Báo cáo nhanh", "sourceDue": "Khi phát sinh", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Biên bản xử lý sự cố ban đầu", "source": "To_van_phong.xlsx / QS", "mandatory": true, "periodic": false}, {"id": "QS-9", "role": "QS", "title": "Theo dõi, ghi nhận việc thực hiện các yêu cầu, biện pháp giáo dục học sinh sau khi có ý kiến chỉ đạo của giáo viên chủ nhiệm hoặc Ban Giám hiệu; báo cáo kết quả thực hiện.", "output": "Phiếu theo dõi", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Nhật ký theo dõi HS vi phạm", "source": "To_van_phong.xlsx / QS", "mandatory": true, "periodic": false}, {"id": "QS-10", "role": "QS", "title": "Tổng hợp tình hình chuyên cần, nền nếp, vi phạm nội quy và các vụ việc liên quan đến học sinh theo ngày, tuần hoặc thời gian được yêu cầu.", "output": "Bảng tổng hợp", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Báo cáo thi đua tuần/tháng", "source": "To_van_phong.xlsx / QS", "mandatory": true, "periodic": false}, {"id": "QS-11", "role": "QS", "title": "Báo cáo kịp thời cho Ban Giám hiệu các vụ việc bất thường, vụ việc có nguy cơ ảnh hưởng đến an toàn học sinh hoặc an ninh, trật tự trong trường.", "output": "Báo cáo khẩn", "sourceDue": "Khi phát sinh", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "Văn bản báo cáo/Biên bản nộp BGH", "source": "To_van_phong.xlsx / QS", "mandatory": true, "periodic": false}, {"id": "QS-12", "role": "QS", "title": "Phối hợp tổ chức chào cờ, sinh hoạt toàn trường, các hoạt động tập trung học sinh và các hoạt động giáo dục khác theo phân công.", "output": "Kế hoạch/Biên bản", "sourceDue": "Theo lịch", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Minh chứng phân công, hình ảnh", "source": "To_van_phong.xlsx / QS", "mandatory": true, "periodic": false}, {"id": "TTVP-1", "role": "TTVP", "title": "Xây dựng và tổ chức thực hiện kế hoạch hoạt động của tổ văn phòng theo kế hoạch của nhà trường.", "output": "Kế hoạch hoạt động", "sourceDue": "30/8/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "Văn bản Kế hoạch được duyệt", "source": "To_van_phong.xlsx / TTVP", "mandatory": true, "periodic": false}, {"id": "TTVP-2", "role": "TTVP", "title": "Phân công, điều phối các nhiệm vụ trong tổ theo kế hoạch của tổ và sự chỉ đạo của Hiệu trưởng; theo dõi việc thực hiện nhiệm vụ của các thành viên.", "output": "Bảng phân công", "sourceDue": "30/8/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Sổ/Văn bản phân công nhiệm vụ", "source": "To_van_phong.xlsx / TTVP", "mandatory": true, "periodic": false}, {"id": "TTVP-3", "role": "TTVP", "title": "Tổ chức sinh hoạt tổ văn phòng theo quy định; bảo đảm nội dung sinh hoạt thiết thực, hiệu quả và gắn với nhiệm vụ được giao.", "output": "Biên bản sinh hoạt", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Sổ biên bản sinh hoạt tổ", "source": "To_van_phong.xlsx / TTVP", "mandatory": true, "periodic": false}, {"id": "TTVP-4", "role": "TTVP", "title": "Theo dõi tiến độ, chất lượng và kết quả thực hiện công việc của các thành viên; kịp thời báo cáo, đề xuất xử lý những khó khăn, vướng mắc phát sinh.", "output": "Báo cáo tiến độ", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Sổ theo dõi, nhật ký công tác", "source": "To_van_phong.xlsx / TTVP", "mandatory": true, "periodic": false}, {"id": "TTVP-5", "role": "TTVP", "title": "Điều phối, phối hợp thực hiện các lĩnh vực công tác thuộc tổ văn phòng; bảo đảm sự liên thông, phối hợp giữa các vị trí công việc trong tổ.", "output": "Biên bản phối hợp", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Biên bản làm việc liên bộ phận", "source": "To_van_phong.xlsx / TTVP", "mandatory": true, "periodic": false}, {"id": "TTVP-6", "role": "TTVP", "title": "Theo dõi, kiểm tra việc quản lý, cập nhật và lưu trữ hồ sơ, sổ sách, dữ liệu thuộc phạm vi hoạt động của tổ theo quy định.", "output": "Biên bản kiểm tra", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Phiếu/Biên bản kiểm tra hồ sơ", "source": "To_van_phong.xlsx / TTVP", "mandatory": true, "periodic": false}, {"id": "TTVP-7", "role": "TTVP", "title": "Hướng dẫn, hỗ trợ nghiệp vụ cho các thành viên trong tổ; phối hợp giải quyết những vấn đề phát sinh trong quá trình thực hiện nhiệm vụ.", "output": "Sổ tay hướng dẫn", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Tài liệu hướng dẫn/Nhật ký hỗ trợ", "source": "To_van_phong.xlsx / TTVP", "mandatory": true, "periodic": false}, {"id": "TTVP-8", "role": "TTVP", "title": "Tổng hợp số liệu, kết quả thực hiện nhiệm vụ; thực hiện báo cáo, sơ kết, tổng kết và đề xuất giải pháp nâng cao hiệu quả hoạt động của tổ theo yêu cầu của Hiệu trưởng.", "output": "Báo cáo sơ kết/tổng kết", "sourceDue": "30/9/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Báo cáo nộp Ban Giám hiệu", "source": "To_van_phong.xlsx / TTVP", "mandatory": true, "periodic": false}, {"id": "TPVP-1", "role": "TPVP", "title": "Tham gia xây dựng và thực hiện kế hoạch hoạt động của tổ văn phòng theo lĩnh vực, nhiệm vụ được phân công.", "output": "Kế hoạch triển khai", "sourceDue": "30/8/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Bản thảo góp ý/Kế hoạch tổ", "source": "To_van_phong.xlsx / TPVP", "mandatory": true, "periodic": false}, {"id": "TPVP-2", "role": "TPVP", "title": "Theo dõi tiến độ và kết quả thực hiện các nhiệm vụ thuộc lĩnh vực được Tổ trưởng phân công; kịp thời báo cáo những vấn đề phát sinh.", "output": "Báo cáo tiến độ", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Nhật ký công việc cá nhân", "source": "To_van_phong.xlsx / TPVP", "mandatory": true, "periodic": false}, {"id": "TPVP-3", "role": "TPVP", "title": "Hướng dẫn, hỗ trợ thành viên trong tổ thực hiện nhiệm vụ chuyên môn, nghiệp vụ theo phân công và yêu cầu công việc.", "output": "Biên bản hướng dẫn", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Sổ tay/Nhật ký hỗ trợ nghiệp vụ", "source": "To_van_phong.xlsx / TPVP", "mandatory": true, "periodic": false}, {"id": "TPVP-4", "role": "TPVP", "title": "Tham gia kiểm tra hồ sơ, dữ liệu, tiến độ và sản phẩm công việc của các thành viên theo phân công; tổng hợp những nội dung cần điều chỉnh và báo cáo Tổ trưởng.", "output": "Biên bản kiểm tra", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Phiếu kiểm tra hồ sơ định kỳ", "source": "To_van_phong.xlsx / TPVP", "mandatory": true, "periodic": false}, {"id": "TPVP-5", "role": "TPVP", "title": "Tổng hợp số liệu, kết quả thực hiện nhiệm vụ thuộc lĩnh vực được giao; phối hợp chuẩn bị nội dung báo cáo của tổ.", "output": "Bảng tổng hợp số liệu", "sourceDue": "30/9/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Biểu mẫu số liệu thống kê", "source": "To_van_phong.xlsx / TPVP", "mandatory": true, "periodic": false}, {"id": "TPVP-6", "role": "TPVP", "title": "Điều hành hoạt động của tổ hoặc một số nhiệm vụ cụ thể khi được Tổ trưởng phân công hoặc ủy quyền; báo cáo kết quả thực hiện với Tổ trưởng.", "output": "Biên bản điều hành", "sourceDue": "Theo phân công", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Biên bản họp/\nSổ điều hành", "source": "To_van_phong.xlsx / TPVP", "mandatory": true, "periodic": false}, {"id": "VT-1", "role": "VT", "title": "Tiếp nhận, đăng ký, phân loại và chuyển giao văn bản đến; bảo đảm văn bản được chuyển đúng đối tượng, đúng thời gian và đúng quy trình.", "output": "Sổ văn bản đến", "sourceDue": "Hằng ngày", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Sổ đăng ký văn bản đến / Hệ thống VPĐT", "source": "To_van_phong.xlsx / VT", "mandatory": true, "periodic": false}, {"id": "VT-2", "role": "VT", "title": "Theo dõi, đôn đốc việc tiếp nhận và xử lý văn bản theo thời hạn; tổng hợp, báo cáo những văn bản chưa được xử lý hoặc có nguy cơ quá hạn theo yêu cầu.", "output": "Báo cáo đôn đốc", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Sổ theo dõi tiến độ / Báo cáo nhắc việc", "source": "To_van_phong.xlsx / VT", "mandatory": true, "periodic": false}, {"id": "VT-3", "role": "VT", "title": "Kiểm tra thể thức, kỹ thuật trình bày và thủ tục phát hành văn bản theo quy định; kịp thời báo cáo người có thẩm quyền khi phát hiện sai sót.", "output": "Phiếu kiểm tra thể thức", "sourceDue": "Hằng ngày", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Bản thảo văn bản có ý kiến rà soát", "source": "To_van_phong.xlsx / VT", "mandatory": true, "periodic": false}, {"id": "VT-4", "role": "VT", "title": "Thực hiện đăng ký, đóng dấu, phát hành và theo dõi việc phát hành văn bản của nhà trường theo quy định.", "output": "Sổ văn bản đi / Sổ dấu", "sourceDue": "Hằng ngày", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Sổ phát hành văn bản / Dữ liệu hệ thống", "source": "To_van_phong.xlsx / VT", "mandatory": true, "periodic": false}, {"id": "VT-5", "role": "VT", "title": "Quản lý và sử dụng con dấu, thiết bị lưu khóa bí mật của nhà trường theo quyết định phân công và quy định về công tác văn thư; bảo đảm an toàn, bảo mật trong quá trình quản lý, sử dụng.", "output": "Biên bản bàn giao/quản lý", "sourceDue": "Thường xuyên", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "Quyết định phân công quản lý con dấu", "source": "To_van_phong.xlsx / VT", "mandatory": true, "periodic": false}, {"id": "VT-6", "role": "VT", "title": "Quản lý, cập nhật, lưu trữ và khai thác văn bản, hồ sơ điện tử trên hệ thống quản lý văn bản và các hệ thống thông tin được nhà trường sử dụng.", "output": "Cơ sở dữ liệu văn bản", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Hệ thống quản lý văn bản điện tử", "source": "To_van_phong.xlsx / VT", "mandatory": true, "periodic": false}, {"id": "VT-7", "role": "VT", "title": "Hướng dẫn các bộ phận, cá nhân lập hồ sơ công việc; kiểm tra việc hoàn thiện hồ sơ trước khi giao nộp theo quy định.", "output": "Sổ hướng dẫn lập hồ sơ", "sourceDue": "30/9/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Kế hoạch/Biên bản hướng dẫn nộp lưu", "source": "To_van_phong.xlsx / VT", "mandatory": true, "periodic": false}, {"id": "VT-8", "role": "VT", "title": "Thu thập, phân loại, sắp xếp, thống kê và thực hiện giao nộp hồ sơ, tài liệu vào lưu trữ theo quy định.", "output": "Mục lục hồ sơ nộp lưu", "sourceDue": "30/9/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Biên bản giao nhận tài liệu lưu trữ", "source": "To_van_phong.xlsx / VT", "mandatory": true, "periodic": false}, {"id": "VT-9", "role": "VT", "title": "Quản lý, bảo quản và khai thác hồ sơ hành chính, hồ sơ học sinh và các loại hồ sơ, tài liệu khác được Hiệu trưởng phân công quản lý.", "output": "Kho lưu trữ hồ sơ", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Sổ theo dõi khai thác kho lưu trữ", "source": "To_van_phong.xlsx / VT", "mandatory": true, "periodic": false}, {"id": "VT-10", "role": "VT", "title": "Thực hiện sao lục, sao y, chứng thực bản sao hoặc cấp phát giấy tờ, hồ sơ theo thẩm quyền và quy định của nhà trường.", "output": "Văn bản sao y/chứng thực", "sourceDue": "Khi phát sinh", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Sổ chứng thực / Văn bản sao lục", "source": "To_van_phong.xlsx / VT", "mandatory": true, "periodic": false}, {"id": "VT-11", "role": "VT", "title": "Bảo đảm an toàn, bảo mật thông tin, hồ sơ, tài liệu trong quá trình tiếp nhận, xử lý, quản lý, khai thác và lưu trữ; không cung cấp thông tin, tài liệu cho tổ chức, cá nhân không có thẩm quyền.", "output": "Cam kết bảo mật", "sourceDue": "Thường xuyên", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "Quy chế bảo mật thông tin đơn vị", "source": "To_van_phong.xlsx / VT", "mandatory": true, "periodic": false}, {"id": "VT-12", "role": "VT", "title": "Thực hiện thống kê, tổng hợp, lưu trữ minh chứng và báo cáo định kỳ, đột xuất về công tác văn thư, lưu trữ theo yêu cầu của Hiệu trưởng.", "output": "Báo cáo định kỳ", "sourceDue": "30/9/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Văn bản báo cáo lưu trữ nộp BGH", "source": "To_van_phong.xlsx / VT", "mandatory": true, "periodic": false}, {"id": "KT-1", "role": "KT", "title": "Lập dự toán thu, chi ngân sách và các nguồn kinh phí của nhà trường theo quy định.", "output": "Dự toán ngân sách", "sourceDue": "30/8/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "Văn bản dự toán trình cấp trên", "source": "To_van_phong.xlsx / KT", "mandatory": true, "periodic": false}, {"id": "KT-2", "role": "KT", "title": "Tham mưu Hiệu trưởng trong việc phân bổ, quản lý và sử dụng kinh phí bảo đảm đúng mục đích, đúng chế độ, tiêu chuẩn, định mức và trong phạm vi dự toán được giao.", "output": "Kế hoạch tài chính", "sourceDue": "30/8/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "Kế hoạch/Tờ trình tài chính", "source": "To_van_phong.xlsx / KT", "mandatory": true, "periodic": false}, {"id": "KT-3", "role": "KT", "title": "Kiểm tra tính đầy đủ, hợp pháp, hợp lệ của hồ sơ, chứng từ kế toán trước khi thực hiện các nghiệp vụ thu, chi, thanh toán theo quy định.", "output": "Sổ sách kiểm tra", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Hồ sơ thanh quyết toán có ý kiến", "source": "To_van_phong.xlsx / KT", "mandatory": true, "periodic": false}, {"id": "KT-4", "role": "KT", "title": "Thực hiện các nghiệp vụ thu, chi, thanh toán và các giao dịch tài chính của nhà trường theo đúng quy định và trong phạm vi được phân công.", "output": "Chứng từ thu, chi", "sourceDue": "Hằng ngày", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Phiếu thu/chi, Ủy nhiệm chi", "source": "To_van_phong.xlsx / KT", "mandatory": true, "periodic": false}, {"id": "KT-5", "role": "KT", "title": "Hạch toán, phản ánh đầy đủ, kịp thời và chính xác các nghiệp vụ kinh tế, tài chính phát sinh theo chế độ kế toán hiện hành.", "output": "Bảng lương hàng tháng", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Bảng lương, Danh sách chuyển khoản", "source": "To_van_phong.xlsx / KT", "mandatory": true, "periodic": false}, {"id": "KT-6", "role": "KT", "title": "Quản lý, cập nhật và lưu trữ sổ kế toán, chứng từ, dữ liệu kế toán và các hồ sơ tài chính theo quy định.", "output": "Sổ kế toán tổng hợp", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Hệ thống sổ sách kế toán", "source": "To_van_phong.xlsx / KT", "mandatory": true, "periodic": false}, {"id": "KT-7", "role": "KT", "title": "Thực hiện công tác tiền lương, phụ cấp, các khoản thanh toán và chế độ, chính sách về tài chính đối với viên chức, người lao động theo quy định.", "output": "Chứng từ nộp bảo hiểm", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Chứng từ nộp BHXH, BHYT, KPCD", "source": "To_van_phong.xlsx / KT", "mandatory": true, "periodic": false}, {"id": "KT-8", "role": "KT", "title": "Thực hiện hoặc phối hợp thực hiện các nghĩa vụ về bảo hiểm, thuế và các nghĩa vụ tài chính khác của nhà trường theo quy định.", "output": "Báo cáo tài chính", "sourceDue": "Theo quý", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "Báo cáo tài chính định kỳ", "source": "To_van_phong.xlsx / KT", "mandatory": true, "periodic": false}, {"id": "KT-9", "role": "KT", "title": "Theo dõi, hạch toán và phối hợp quản lý tài sản công; cập nhật biến động tăng, giảm tài sản vào hồ sơ, sổ sách và hệ thống dữ liệu theo quy định.", "output": "Biên bản kiểm kê", "sourceDue": "2026-09-30T00:00:00", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Biên bản kiểm kê quỹ, tài sản", "source": "To_van_phong.xlsx / KT", "mandatory": true, "periodic": false}, {"id": "KT-10", "role": "KT", "title": "Thường xuyên đối chiếu số liệu giữa sổ kế toán, chứng từ, hồ sơ và các hệ thống dữ liệu có liên quan; kịp thời phát hiện, báo cáo và đề xuất xử lý chênh lệch.", "output": "Báo cáo phân tích tài chính", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Báo cáo cân đối thu chi", "source": "To_van_phong.xlsx / KT", "mandatory": true, "periodic": false}, {"id": "KT-11", "role": "KT", "title": "Phối hợp thực hiện kiểm kê tài chính, tiền, tài sản và các nguồn lực khác thuộc phạm vi quản lý; lập, đối chiếu và hoàn thiện hồ sơ kiểm kê theo quy định.", "output": "Hồ sơ kiểm tra tài chính", "sourceDue": "30/9/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Biên bản kiểm tra tài chính", "source": "To_van_phong.xlsx / KT", "mandatory": true, "periodic": false}, {"id": "KT-12", "role": "KT", "title": "Thực hiện công khai tài chính, ngân sách và các nội dung tài chính khác thuộc trách nhiệm của nhà trường theo quy định.", "output": "Báo cáo giải trình", "sourceDue": "Khi phát sinh", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Văn bản giải trình / Hồ sơ đoàn kiểm tra", "source": "To_van_phong.xlsx / KT", "mandatory": true, "periodic": false}, {"id": "KT-13", "role": "KT", "title": "Lập, tổng hợp và trình báo cáo tài chính, báo cáo quyết toán và các báo cáo tài chính khác theo quy định, bảo đảm đúng thời hạn và chính xác về số liệu.", "output": "Báo cáo quyết toán", "sourceDue": "30/9/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "Báo cáo quyết toán năm/quý được duyệt", "source": "To_van_phong.xlsx / KT", "mandatory": true, "periodic": false}, {"id": "KT-14", "role": "KT", "title": "Cung cấp hồ sơ, chứng từ, sổ sách và dữ liệu kế toán phục vụ công tác thanh tra, kiểm tra, kiểm toán và các yêu cầu quản lý tài chính theo thẩm quyền.", "output": "Hồ sơ phục vụ kiểm tra", "sourceDue": "Khi có yêu cầu", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Biên bản làm việc của đoàn kiểm tra", "source": "To_van_phong.xlsx / KT", "mandatory": true, "periodic": false}, {"id": "KT-15", "role": "KT", "title": "Lưu trữ, bảo quản và bảo mật hồ sơ, chứng từ, sổ sách và dữ liệu kế toán theo quy định.", "output": "Biên bản bàn giao", "sourceDue": "Khi phát sinh", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Biên bản bàn giao quỹ, tài sản, sổ sách", "source": "To_van_phong.xlsx / KT", "mandatory": true, "periodic": false}, {"id": "TQUY-1", "role": "TQUY", "title": "Thực hiện thu, chi tiền mặt theo đúng chứng từ kế toán hợp lệ, hợp pháp và đã được người có thẩm quyền phê duyệt.", "output": "Sổ quỹ tiền mặt", "sourceDue": "Hằng ngày", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Sổ quỹ tiền mặt / Phiếu thu, chi", "source": "To_van_phong.xlsx / TQUY", "mandatory": true, "periodic": false}, {"id": "TQUY-2", "role": "TQUY", "title": "Bảo quản an toàn tiền mặt, tài sản và các giấy tờ có giá được giao quản lý; thực hiện các yêu cầu về an toàn kho quỹ theo quy định.", "output": "Biên lai thu / Phiếu chi", "sourceDue": "Hằng ngày", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Chứng từ thu, chi tiền mặt", "source": "To_van_phong.xlsx / TQUY", "mandatory": true, "periodic": false}, {"id": "TQUY-3", "role": "TQUY", "title": "Ghi chép, cập nhật và quản lý sổ quỹ tiền mặt đầy đủ, chính xác, kịp thời theo quy định.", "output": "Sổ quỹ chi tiết", "sourceDue": "Hằng ngày", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Sổ quỹ tiền mặt cập nhật", "source": "To_van_phong.xlsx / TQUY", "mandatory": true, "periodic": false}, {"id": "TQUY-4", "role": "TQUY", "title": "Thường xuyên đối chiếu số dư quỹ tiền mặt với sổ kế toán và chứng từ có liên quan; kịp thời báo cáo chênh lệch hoặc bất thường.", "output": "Biên bản đối chiếu quỹ", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Biên bản đối chiếu quỹ với kế toán", "source": "To_van_phong.xlsx / TQUY", "mandatory": true, "periodic": false}, {"id": "TQUY-5", "role": "TQUY", "title": "Thực hiện giao dịch với Kho bạc Nhà nước, ngân hàng hoặc các tổ chức có liên quan theo phân công và quy định của nhà trường.", "output": "Sơ đồ giao dịch ngân hàng", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Giấy nộp tiền, sao kê ngân hàng", "source": "To_van_phong.xlsx / TQUY", "mandatory": true, "periodic": false}, {"id": "TQUY-6", "role": "TQUY", "title": "Sắp xếp, bảo quản và lưu trữ chứng từ thu, chi, sổ quỹ và các hồ sơ thuộc phạm vi công việc theo quy định.", "output": "Kho lưu trữ chứng từ", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Sổ sách lưu trữ quỹ", "source": "To_van_phong.xlsx / TQUY", "mandatory": true, "periodic": false}, {"id": "TQUY-7", "role": "TQUY", "title": "Tham gia kiểm kê quỹ tiền mặt định kỳ, đột xuất; phối hợp đối chiếu số liệu và lập biên bản theo quy định.", "output": "Biên bản kiểm kê quỹ", "sourceDue": "30/9/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Biên bản kiểm kê quỹ tiền mặt", "source": "To_van_phong.xlsx / TQUY", "mandatory": true, "periodic": false}, {"id": "TQUY-8", "role": "TQUY", "title": "Kịp thời báo cáo kế toán và Hiệu trưởng các trường hợp thiếu, thừa quỹ, chênh lệch số liệu, chứng từ không hợp lệ hoặc các vấn đề bất thường phát sinh trong quá trình quản lý quỹ.", "output": "Báo cáo thu chi quỹ", "sourceDue": "30/9/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Báo cáo tồn quỹ định kỳ", "source": "To_van_phong.xlsx / TQUY", "mandatory": true, "periodic": false}, {"id": "YTE-1", "role": "YTE", "title": "Xây dựng và thực hiện kế hoạch công tác y tế trường học, chăm sóc sức khỏe học sinh theo kế hoạch giáo dục và quy định hiện hành.", "output": "Kế hoạch y tế trường học", "sourceDue": "30/8/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Văn bản Kế hoạch y tế được duyệt", "source": "To_van_phong.xlsx / YTE", "mandatory": true, "periodic": false}, {"id": "YTE-2", "role": "YTE", "title": "Quản lý, cập nhật và lưu trữ hồ sơ, thông tin sức khỏe học sinh theo quy định; bảo đảm nguyên tắc bảo mật thông tin cá nhân.", "output": "Sổ khám chữa bệnh ban đầu", "sourceDue": "Hằng ngày", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Sổ y tế trường học / Hồ sơ sức khỏe", "source": "To_van_phong.xlsx / YTE", "mandatory": true, "periodic": false}, {"id": "YTE-3", "role": "YTE", "title": "Phối hợp với cơ sở y tế và các đơn vị có liên quan tổ chức khám sức khỏe học sinh theo kế hoạch; tiếp nhận, cập nhật và theo dõi kết quả khám sức khỏe.", "output": "Báo cáo khám sức khỏe", "sourceDue": "30/9/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Biên bản khám sức khỏe / Sổ theo dõi", "source": "To_van_phong.xlsx / YTE", "mandatory": true, "periodic": false}, {"id": "YTE-4", "role": "YTE", "title": "Theo dõi tình trạng sức khỏe học sinh trong thời gian học tập tại trường; phát hiện, ghi nhận và báo cáo kịp thời những trường hợp có dấu hiệu bất thường cần được hỗ trợ.", "output": "Nhật ký sơ cấp cứu", "sourceDue": "Hằng ngày", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Sổ theo dõi sơ cấp cứu ban đầu", "source": "To_van_phong.xlsx / YTE", "mandatory": true, "periodic": false}, {"id": "YTE-5", "role": "YTE", "title": "Thực hiện sơ cấp cứu, chăm sóc sức khỏe ban đầu và xử trí ban đầu các trường hợp thông thường trong phạm vi chuyên môn; kịp thời báo cáo và phối hợp chuyển tuyến khi cần thiết.", "output": "Phiếu theo dõi sức khỏe", "sourceDue": "Hằng ngày", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Sổ y tế / Phiếu chuyển tuyến y tế", "source": "To_van_phong.xlsx / YTE", "mandatory": true, "periodic": false}, {"id": "YTE-6", "role": "YTE", "title": "Theo dõi, thống kê và báo cáo tình hình tai nạn, thương tích, sự cố sức khỏe xảy ra trong trường; tham mưu các biện pháp phòng ngừa.", "output": "Báo cáo phòng chống dịch", "sourceDue": "Theo lịch/Đột xuất", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "Sổ theo dõi dịch bệnh / Kế hoạch y tế", "source": "To_van_phong.xlsx / YTE", "mandatory": true, "periodic": false}, {"id": "YTE-7", "role": "YTE", "title": "Phối hợp triển khai các biện pháp phòng, chống dịch bệnh và các bệnh học đường; theo dõi tình hình sức khỏe học sinh và thực hiện thông tin, báo cáo theo quy định.", "output": "Sổ theo dõi tiêm chủng", "sourceDue": "Theo kế hoạch", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Danh sách tiêm chủng / Báo cáo", "source": "To_van_phong.xlsx / YTE", "mandatory": true, "periodic": false}, {"id": "YTE-8", "role": "YTE", "title": "Theo dõi, kiểm tra và tham mưu bảo đảm các điều kiện vệ sinh trường học, nước uống, nước sinh hoạt, môi trường học tập và các yếu tố ảnh hưởng đến sức khỏe học sinh theo phân công.", "output": "Biên bản kiểm tra ATTP", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "Sổ kiểm thực 3 bước / Bếp ăn", "source": "To_van_phong.xlsx / YTE", "mandatory": true, "periodic": false}, {"id": "YTE-9", "role": "YTE", "title": "Phối hợp với các bộ phận có liên quan kiểm tra, giám sát các điều kiện an toàn thực phẩm tại trường theo chức năng, nhiệm vụ và quy định hiện hành.", "output": "Tài liệu tuyên truyền", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Bài viết truyền thông / Bảng tin y tế", "source": "To_van_phong.xlsx / YTE", "mandatory": true, "periodic": false}, {"id": "YTE-10", "role": "YTE", "title": "Quản lý, bảo quản và sử dụng thuốc, vật tư, trang thiết bị y tế được giao; kiểm tra tình trạng, hạn sử dụng và điều kiện bảo quản theo quy định.", "output": "Sổ quản lý thuốc", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Sổ xuất nhập thuốc / Tủ thuốc", "source": "To_van_phong.xlsx / YTE", "mandatory": true, "periodic": false}, {"id": "YTE-11", "role": "YTE", "title": "Tổ chức hoặc phối hợp tổ chức tuyên truyền, giáo dục sức khỏe, phòng chống dịch bệnh, dinh dưỡng, vệ sinh cá nhân, sức khỏe học đường và các nội dung chăm sóc sức khỏe phù hợp với học sinh.", "output": "Kế hoạch tuyên truyền", "sourceDue": "Theo kế hoạch", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Kế hoạch, hình ảnh buổi truyền thông", "source": "To_van_phong.xlsx / YTE", "mandatory": true, "periodic": false}, {"id": "YTE-12", "role": "YTE", "title": "Phối hợp thực hiện công tác bảo hiểm y tế học sinh; hướng dẫn học sinh, cha mẹ học sinh thực hiện các thủ tục liên quan theo quy định.", "output": "Danh sách tham gia BHYT", "sourceDue": "2026-09-30T00:00:00", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Danh sách học sinh tham gia BHYT", "source": "To_van_phong.xlsx / YTE", "mandatory": true, "periodic": false}, {"id": "YTE-13", "role": "YTE", "title": "Phối hợp với cơ sở y tế, cơ quan chuyên môn, cha mẹ học sinh và các bộ phận có liên quan trong việc chăm sóc, hỗ trợ và theo dõi sức khỏe học sinh.", "output": "Biên bản phối hợp xử lý dịch", "sourceDue": "Khi phát sinh", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "Biên bản làm việc với Trung tâm y tế", "source": "To_van_phong.xlsx / YTE", "mandatory": true, "periodic": false}, {"id": "YTE-14", "role": "YTE", "title": "Thực hiện thống kê, tổng hợp số liệu, lưu trữ minh chứng và báo cáo định kỳ, đột xuất về công tác y tế trường học theo yêu cầu của Hiệu trưởng.", "output": "Báo cáo y tế trường học", "sourceDue": "30/9/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Báo cáo định kỳ gửi Phòng/Sở Y tế", "source": "To_van_phong.xlsx / YTE", "mandatory": true, "periodic": false}, {"id": "CNTT-1", "role": "CNTT", "title": "Tham mưu xây dựng và tổ chức thực hiện kế hoạch ứng dụng công nghệ thông tin, chuyển đổi số của nhà trường theo kế hoạch giáo dục, kế hoạch cải cách hành chính và định hướng chuyển đổi số của ngành.", "output": "Kế hoạch CNTT & CĐS", "sourceDue": "30/8/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "Văn bản Kế hoạch được duyệt", "source": "To_van_phong.xlsx / CNTT", "mandatory": true, "periodic": false}, {"id": "CNTT-2", "role": "CNTT", "title": "Quản trị, vận hành và theo dõi hoạt động của hệ thống mạng, đường truyền Internet, thiết bị công nghệ thông tin và các hạ tầng kỹ thuật số thuộc phạm vi nhà trường quản lý; kịp thời phát hiện, xử lý hoặc báo cáo sự cố.", "output": "Sổ nhật ký vận hành", "sourceDue": "Hằng ngày", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Nhật ký hệ thống / Báo cáo sự cố", "source": "To_van_phong.xlsx / CNTT", "mandatory": true, "periodic": false}, {"id": "CNTT-3", "role": "CNTT", "title": "Quản trị tài khoản người dùng, thư điện tử công vụ và các phần mềm, nền tảng dùng chung theo phân quyền; bảo đảm việc cấp, thay đổi, khóa và quản lý tài khoản đúng quy định.", "output": "Sổ quản lý tài khoản", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Sổ theo dõi cấp phát/phân quyền", "source": "To_van_phong.xlsx / CNTT", "mandatory": true, "periodic": false}, {"id": "CNTT-4", "role": "CNTT", "title": "Hỗ trợ, hướng dẫn giáo viên, nhân viên và các bộ phận trong việc sử dụng phần mềm, nền tảng số, hệ thống quản lý và các công cụ công nghệ phục vụ công tác chuyên môn, hành chính và quản trị nhà trường.", "output": "Sổ hướng dẫn / Hỗ trợ", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Nhật ký hỗ trợ / Phiếu yêu cầu", "source": "To_van_phong.xlsx / CNTT", "mandatory": true, "periodic": false}, {"id": "CNTT-5", "role": "CNTT", "title": "Hỗ trợ cập nhật, đồng bộ, kết nối và khai thác dữ liệu trên các hệ thống số; phối hợp với các bộ phận liên quan bảo đảm dữ liệu được cập nhật đúng quy trình, đúng thời hạn.", "output": "Dữ liệu đồng bộ", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Nhật ký đồng bộ CSDL ngành", "source": "To_van_phong.xlsx / CNTT", "mandatory": true, "periodic": false}, {"id": "CNTT-6", "role": "CNTT", "title": "Kiểm tra kỹ thuật đối với dữ liệu trên hệ thống, phát hiện các lỗi về định dạng, kết nối, trùng lặp, thiếu trường thông tin hoặc sai lệch do thao tác kỹ thuật; thông báo và phối hợp với bộ phận chịu trách nhiệm nội dung để điều chỉnh.", "output": "Báo cáo rà soát lỗi", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Biên bản rà soát/sửa lỗi dữ liệu", "source": "To_van_phong.xlsx / CNTT", "mandatory": true, "periodic": false}, {"id": "CNTT-7", "role": "CNTT", "title": "Thực hiện sao lưu, phục hồi dữ liệu và các biện pháp kỹ thuật bảo vệ dữ liệu theo kế hoạch; ưu tiên đối với các hệ thống, dữ liệu quan trọng của nhà trường.", "output": "Bản sao lưu (Backup)", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "File backup lưu trữ định kỳ", "source": "To_van_phong.xlsx / CNTT", "mandatory": true, "periodic": false}, {"id": "CNTT-8", "role": "CNTT", "title": "Thực hiện các biện pháp bảo đảm an toàn, an ninh thông tin và bảo vệ dữ liệu cá nhân trong phạm vi phụ trách; kịp thời phát hiện, cảnh báo và báo cáo nguy cơ mất an toàn thông tin hoặc sự cố an ninh mạng.", "output": "Báo cáo an toàn thông tin", "sourceDue": "Thường xuyên", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "Hồ sơ bảo mật / Cảnh báo an ninh", "source": "To_van_phong.xlsx / CNTT", "mandatory": true, "periodic": false}, {"id": "CNTT-9", "role": "CNTT", "title": "Quản trị, cập nhật và hỗ trợ vận hành trang thông tin điện tử, các kênh thông tin số và nền tảng trực tuyến được Hiệu trưởng giao; bảo đảm yêu cầu về kỹ thuật, phân quyền, an toàn và thời gian cập nhật.", "output": "Trang thông tin điện tử", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Lịch sử cập nhật Website/Cổng TTĐT", "source": "To_van_phong.xlsx / CNTT", "mandatory": true, "periodic": false}, {"id": "CNTT-10", "role": "CNTT", "title": "Bảo đảm hỗ trợ kỹ thuật cho các hoạt động thi, kiểm tra, khảo sát, hội họp, tập huấn, sự kiện và các hoạt động trực tuyến của nhà trường theo kế hoạch; kiểm tra hệ thống, thiết bị và phương án dự phòng trước khi thực hiện.", "output": "Biên bản trực kỹ thuật", "sourceDue": "Theo lịch", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Kế hoạch/Phân công trực kỹ thuật", "source": "To_van_phong.xlsx / CNTT", "mandatory": true, "periodic": false}, {"id": "CNTT-11", "role": "CNTT", "title": "Kiểm tra, đánh giá tình trạng kỹ thuật của thiết bị công nghệ thông tin; tham mưu, đề xuất sửa chữa, bảo trì, nâng cấp, thay thế hoặc bổ sung thiết bị, phần mềm và hạ tầng kỹ thuật cần thiết.", "output": "Báo cáo kiểm định", "sourceDue": "30/9/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Biên bản kiểm tra thiết bị CNTT", "source": "To_van_phong.xlsx / CNTT", "mandatory": true, "periodic": false}, {"id": "CNTT-12", "role": "CNTT", "title": "Tham mưu số hóa hồ sơ, dữ liệu và cải tiến quy trình xử lý công việc trên môi trường số; đề xuất các giải pháp giảm thao tác thủ công, tăng khả năng liên thông, khai thác và tái sử dụng dữ liệu.", "output": "Đề án/Quy trình số hóa", "sourceDue": "30/9/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "Văn bản đề xuất/Quy trình số hóa", "source": "To_van_phong.xlsx / CNTT", "mandatory": true, "periodic": false}, {"id": "CNTT-13", "role": "CNTT", "title": "Theo dõi, tổng hợp và đánh giá tình hình ứng dụng CNTT, chuyển đổi số và mức độ khai thác các hệ thống số của nhà trường; tham mưu giải pháp khắc phục những hạn chế, điểm nghẽn về kỹ thuật và vận hành.", "output": "Báo cáo đánh giá CĐS", "sourceDue": "30/9/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Báo cáo sơ kết/tổng kết CĐS", "source": "To_van_phong.xlsx / CNTT", "mandatory": true, "periodic": false}, {"id": "CNTT-14", "role": "CNTT", "title": "Quản lý, cập nhật hồ sơ, dữ liệu, minh chứng và thực hiện chế độ thống kê, báo cáo về công nghệ thông tin, chuyển đổi số theo định kỳ hoặc đột xuất; thực hiện các nhiệm vụ khác về CNTT, chuyển đổi số theo phân công của Hiệu trưởng.", "output": "Hồ sơ minh chứng CNTT", "sourceDue": "30/9/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Thư mục lưu trữ minh chứng CĐS", "source": "To_van_phong.xlsx / CNTT", "mandatory": true, "periodic": false}, {"id": "BV-1", "role": "BV", "title": "Thực hiện trực bảo vệ, trực cổng và bàn giao ca theo lịch phân công; bảo đảm duy trì lực lượng trực trong thời gian được giao.", "output": "Sổ trực ca / Bàn giao", "sourceDue": "Hằng ngày", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Sổ trực bảo vệ / Sổ giao ca", "source": "To_van_phong.xlsx / BV", "mandatory": true, "periodic": false}, {"id": "BV-2", "role": "BV", "title": "Kiểm soát người, phương tiện ra vào trường theo nội quy, quy định của nhà trường; ghi nhận các trường hợp cần thiết và kịp thời báo cáo người có thẩm quyền khi có dấu hiệu bất thường.", "output": "Sổ kiểm soát ra vào", "sourceDue": "Hằng ngày", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Sổ ghi nhận phương tiện/khách", "source": "To_van_phong.xlsx / BV", "mandatory": true, "periodic": false}, {"id": "BV-3", "role": "BV", "title": "Tiếp nhận, hướng dẫn và hỗ trợ khách đến liên hệ công tác; phối hợp với văn phòng hoặc bộ phận có liên quan để thực hiện quy trình tiếp khách theo quy định của nhà trường.", "output": "Sổ tiếp khách", "sourceDue": "Hằng ngày", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Sổ ghi chép tiếp khách", "source": "To_van_phong.xlsx / BV", "mandatory": true, "periodic": false}, {"id": "BV-4", "role": "BV", "title": "Bảo vệ tài sản, cơ sở vật chất, trang thiết bị và các khu vực thuộc phạm vi được giao; phát hiện, ngăn ngừa và báo cáo nguy cơ mất mát, hư hỏng hoặc xâm nhập trái phép.", "output": "Biên bản bàn giao tài sản", "sourceDue": "Thường xuyên", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Nhật ký tuần tra bảo vệ tài sản", "source": "To_van_phong.xlsx / BV", "mandatory": true, "periodic": false}, {"id": "BV-5", "role": "BV", "title": "Kiểm tra cổng, cửa, hàng rào, khuôn viên và các khu vực được phân công trước, trong và sau ca trực; kịp thời phát hiện tình trạng bất thường và báo cáo.", "output": "Biên bản kiểm tra khu vực", "sourceDue": "Hằng ngày", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Sổ tuần tra khuôn viên", "source": "To_van_phong.xlsx / BV", "mandatory": true, "periodic": false}, {"id": "BV-6", "role": "BV", "title": "Theo dõi, duy trì an ninh, trật tự và an toàn trong phạm vi trường; phối hợp với các bộ phận liên quan khi phát sinh vụ việc ảnh hưởng đến hoạt động bình thường của nhà trường.", "output": "Nhật ký an ninh trật tự", "sourceDue": "Hằng ngày", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Sổ trực ban an ninh trường học", "source": "To_van_phong.xlsx / BV", "mandatory": true, "periodic": false}, {"id": "BV-7", "role": "BV", "title": "Phối hợp kiểm soát học sinh ra, vào trường theo nội quy và sự phân công của nhà trường; ghi nhận các trường hợp học sinh ra, vào ngoài thời gian hoặc không đúng quy định và báo cáo bộ phận có trách nhiệm.", "output": "Sổ kiểm soát học sinh", "sourceDue": "Hằng ngày", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Sổ theo dõi học sinh ra vào cổng", "source": "To_van_phong.xlsx / BV", "mandatory": true, "periodic": false}, {"id": "BV-8", "role": "BV", "title": "Theo dõi hệ thống camera an ninh theo phân công; phát hiện, ghi nhận và báo cáo các dấu hiệu bất thường; bảo đảm không tự ý sao chép, cung cấp hoặc tiết lộ dữ liệu hình ảnh cho người không có thẩm quyền.", "output": "Dữ liệu camera an ninh", "sourceDue": "Thường xuyên", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Nhật ký vận hành hệ thống camera", "source": "To_van_phong.xlsx / BV", "mandatory": true, "periodic": false}, {"id": "BV-9", "role": "BV", "title": "Kiểm tra, theo dõi các điều kiện về phòng cháy, chữa cháy thuộc phạm vi được giao; phát hiện nguy cơ cháy, nổ, lối thoát nạn bị cản trở hoặc thiết bị có dấu hiệu bất thường và báo cáo, phối hợp xử lý theo quy định.", "output": "Sổ kiểm tra PCCC", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "Sổ kiểm tra thiết bị PCCC định kỳ", "source": "To_van_phong.xlsx / BV", "mandatory": true, "periodic": false}, {"id": "BV-10", "role": "BV", "title": "Phát hiện, báo cáo kịp thời các nguy cơ hoặc sự cố liên quan đến an ninh, trật tự, an toàn, tài sản và phòng cháy, chữa cháy cho Ban Giám hiệu hoặc người có thẩm quyền.", "output": "Báo cáo sự cố khẩn cấp", "sourceDue": "Khi phát sinh", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "Biên bản ghi nhận sự cố / Báo cáo BGH", "source": "To_van_phong.xlsx / BV", "mandatory": true, "periodic": false}, {"id": "BV-11", "role": "BV", "title": "Thực hiện các biện pháp xử lý ban đầu trong phạm vi nhiệm vụ, quyền hạn được giao nhằm bảo đảm an toàn người, tài sản và giữ ổn định trật tự; đồng thời báo ngay cho Ban Giám hiệu hoặc lực lượng chức năng khi vụ việc vượt quá khả năng, nhiệm vụ hoặc thẩm quyền.", "output": "Biên bản xử lý ban đầu", "sourceDue": "Khi phát sinh", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Sổ ghi nhận vụ việc / Biên bản xử lý", "source": "To_van_phong.xlsx / BV", "mandatory": true, "periodic": false}, {"id": "BV-12", "role": "BV", "title": "Ghi chép đầy đủ sổ trực, sổ giao ca, sổ theo dõi người và phương tiện ra vào và các vụ việc phát sinh; tổng hợp, báo cáo định kỳ hoặc đột xuất theo yêu cầu.", "output": "Sổ trực ban tổng hợp", "sourceDue": "Hằng ngày", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Hệ thống sổ sách trực bảo vệ", "source": "To_van_phong.xlsx / BV", "mandatory": true, "periodic": false}, {"id": "PV-1", "role": "PV", "title": "Thực hiện vệ sinh, làm sạch và duy trì điều kiện vệ sinh tại các phòng học, phòng làm việc, hành lang, sân trường, khu vực vệ sinh và các khu vực khác theo phạm vi được phân công.", "output": "Khu vực vệ sinh sạch sẽ", "sourceDue": "Hằng ngày", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Nhật ký trực vệ sinh / Sổ kiểm tra", "source": "To_van_phong.xlsx / PV", "mandatory": true, "periodic": false}, {"id": "PV-2", "role": "PV", "title": "Thu gom, phân loại, tập kết và xử lý rác thải theo quy định; bảo đảm khu vực thu gom rác sạch sẽ, không gây mất vệ sinh hoặc ảnh hưởng đến môi trường học đường.", "output": "Khu vực tập kết rác", "sourceDue": "Hằng ngày", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Sổ theo dõi thu gom rác thải", "source": "To_van_phong.xlsx / PV", "mandatory": true, "periodic": false}, {"id": "PV-3", "role": "PV", "title": "Chuẩn bị, sắp xếp phòng họp, hội trường, khu vực tổ chức hoạt động, nước uống và các điều kiện phục vụ khác theo phân công và yêu cầu của nhà trường.", "output": "Phòng họp/sự kiện sẵn sàng", "sourceDue": "Theo lịch", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Kế hoạch chuẩn bị sự kiện/Hội họp", "source": "To_van_phong.xlsx / PV", "mandatory": true, "periodic": false}, {"id": "PV-4", "role": "PV", "title": "Quản lý, bảo quản và sử dụng tiết kiệm, đúng mục đích dụng cụ, vật tư, hóa chất vệ sinh và phương tiện được giao; kịp thời báo cáo nhu cầu bổ sung.", "output": "Sổ quản lý công cụ dụng cụ", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Sổ theo dõi tài sản phục vụ", "source": "To_van_phong.xlsx / PV", "mandatory": true, "periodic": false}, {"id": "PV-5", "role": "PV", "title": "Kiểm tra, phát hiện và báo cáo kịp thời tình trạng hư hỏng, mất vệ sinh, xuống cấp hoặc nguy cơ mất an toàn tại khu vực được phân công; phối hợp thực hiện các biện pháp khắc phục theo chỉ đạo.", "output": "Phiếu báo hỏng cơ sở vật chất", "sourceDue": "Khi phát sinh", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Phiếu yêu cầu sửa chữa cơ sở vật chất", "source": "To_van_phong.xlsx / PV", "mandatory": true, "periodic": false}, {"id": "PV-6", "role": "PV", "title": "Thực hiện các yêu cầu về vệ sinh môi trường, phòng chống dịch bệnh, an toàn lao động và phòng cháy, chữa cháy trong phạm vi nhiệm vụ được giao.", "output": "Báo cáo công tác vệ sinh", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Hồ sơ vệ sinh phòng dịch", "source": "To_van_phong.xlsx / PV", "mandatory": true, "periodic": false}, {"id": "PV-7", "role": "PV", "title": "Phối hợp với các bộ phận có liên quan trong việc bảo đảm vệ sinh, cảnh quan, môi trường học đường phục vụ các hoạt động dạy học, giáo dục, hội họp và sự kiện của nhà trường.", "output": "Cảnh quan trường lớp sạch đẹp", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Biên bản phối hợp / Hình ảnh thực tế", "source": "To_van_phong.xlsx / PV", "mandatory": true, "periodic": false}, {"id": "PV-8", "role": "PV", "title": "Thực hiện ghi nhận, bàn giao và báo cáo tình hình thực hiện nhiệm vụ, các sự cố, thiếu hụt vật tư hoặc vấn đề phát sinh theo định kỳ hoặc đột xuất; thực hiện các nhiệm vụ khác theo phân công của Hiệu trưởng.", "output": "Báo cáo công tác phục vụ", "sourceDue": "2026-09-30T00:00:00", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Báo cáo định kỳ nộp Văn phòng", "source": "To_van_phong.xlsx / PV", "mandatory": true, "periodic": false}, {"id": "TLTN-1", "role": "TLTN", "title": "Tham mưu xây dựng chương trình, kế hoạch công tác Đoàn và phong trào thanh niên của nhà trường phù hợp với chương trình công tác của Đoàn cấp trên và nhiệm vụ giáo dục của nhà trường.", "output": "Kế hoạch công tác Đoàn", "sourceDue": "30/8/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "Văn bản Kế hoạch được duyệt", "source": "To_van_phong.xlsx / TLTN", "mandatory": true, "periodic": false}, {"id": "TLTN-2", "role": "TLTN", "title": "Phối hợp tổ chức triển khai, thực hiện các nghị quyết, chương trình, kế hoạch và phong trào của Đoàn cấp trên theo sự chỉ đạo của Ban Chấp hành Đoàn và Hiệu trưởng.", "output": "Kế hoạch triển khai", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Kế hoạch hoạt động / Quyết định", "source": "To_van_phong.xlsx / TLTN", "mandatory": true, "periodic": false}, {"id": "TLTN-3", "role": "TLTN", "title": "Hướng dẫn, hỗ trợ các chi đoàn xây dựng và thực hiện chương trình công tác; theo dõi tiến độ, tổng hợp kết quả và báo cáo những vấn đề phát sinh.", "output": "Hướng dẫn chi đoàn", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Sổ theo dõi chi đoàn / Biên bản", "source": "To_van_phong.xlsx / TLTN", "mandatory": true, "periodic": false}, {"id": "TLTN-4", "role": "TLTN", "title": "Phối hợp tổ chức các hoạt động giáo dục chính trị, tư tưởng, lý tưởng cách mạng, đạo đức, lối sống và truyền thống cho đoàn viên, thanh niên, học sinh theo chương trình, kế hoạch được phê duyệt.", "output": "Kế hoạch hoạt động giáo dục", "sourceDue": "Theo kế hoạch", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Hồ sơ sự kiện / Hình ảnh minh chứng", "source": "To_van_phong.xlsx / TLTN", "mandatory": true, "periodic": false}, {"id": "TLTN-5", "role": "TLTN", "title": "Quản lý, cập nhật và lưu trữ hồ sơ, dữ liệu đoàn viên theo quy định của tổ chức Đoàn; bảo đảm đầy đủ, chính xác và an toàn thông tin.", "output": "Sổ quản lý đoàn viên", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Hệ thống phần mềm quản lý đoàn viên", "source": "To_van_phong.xlsx / TLTN", "mandatory": true, "periodic": false}, {"id": "TLTN-6", "role": "TLTN", "title": "Phối hợp tổ chức công tác bồi dưỡng, giới thiệu và phát triển đoàn viên theo Điều lệ Đoàn và hướng dẫn của Đoàn cấp trên; thực hiện hồ sơ, thủ tục theo quy định.", "output": "Hồ sơ kết nhận đoàn viên", "sourceDue": "30/9/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Quyết định chuẩn y kết nạp đoàn viên", "source": "To_van_phong.xlsx / TLTN", "mandatory": true, "periodic": false}, {"id": "TLTN-7", "role": "TLTN", "title": "Tham mưu, phối hợp tổ chức các hoạt động văn hóa, văn nghệ, thể dục thể thao, trải nghiệm và phong trào thanh niên theo kế hoạch của nhà trường và tổ chức Đoàn.", "output": "Kế hoạch hội thao/hội diễn", "sourceDue": "Theo lịch", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "Kế hoạch tổ chức, Quyết định thành lập", "source": "To_van_phong.xlsx / TLTN", "mandatory": true, "periodic": false}, {"id": "TLTN-8", "role": "TLTN", "title": "Tổ chức, phối hợp thực hiện các hoạt động tình nguyện, hoạt động cộng đồng, đền ơn đáp nghĩa và các phong trào vì cộng đồng phù hợp với điều kiện thực tế và quy định của nhà trường.", "output": "Kế hoạch tình nguyện", "sourceDue": "Theo kế hoạch", "kind": "Thường xuyên", "base": 10.0, "coef": 1.2, "max": 12.0, "evidence": "Kế hoạch, báo cáo kết quả hoạt động", "source": "To_van_phong.xlsx / TLTN", "mandatory": true, "periodic": false}, {"id": "TLTN-9", "role": "TLTN", "title": "Phối hợp tổ chức các hoạt động giáo dục kỹ năng sống, kỹ năng xã hội, hướng nghiệp, khởi nghiệp và phát triển năng lực cho học sinh theo kế hoạch giáo dục của nhà trường.", "output": "Kế hoạch chuyên đề", "sourceDue": "Theo kế hoạch", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Hồ sơ hoạt động kỹ năng / Hướng nghiệp", "source": "To_van_phong.xlsx / TLTN", "mandatory": true, "periodic": false}, {"id": "TLTN-10", "role": "TLTN", "title": "Phối hợp với giáo viên chủ nhiệm, giáo viên, bộ phận quản lý học sinh, tư vấn học đường và các bộ phận có liên quan trong công tác giáo dục, rèn luyện, hỗ trợ và phát huy vai trò của đoàn viên, thanh niên, học sinh.", "output": "Biên bản phối hợp", "sourceDue": "Hằng tháng", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Sổ theo dõi phối hợp giáo dục", "source": "To_van_phong.xlsx / TLTN", "mandatory": true, "periodic": false}, {"id": "TLTN-11", "role": "TLTN", "title": "Thực hiện và phối hợp thực hiện công tác thông tin, tuyên truyền, truyền thông về hoạt động Đoàn và phong trào thanh niên trên các kênh thông tin được nhà trường và tổ chức Đoàn giao quản lý, sử dụng.", "output": "Tin bài / Trang thông tin", "sourceDue": "Hằng tuần", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Link bài viết Fanpage/Website Đoàn", "source": "To_van_phong.xlsx / TLTN", "mandatory": true, "periodic": false}, {"id": "TLTN-12", "role": "TLTN", "title": "Theo dõi, quản lý và sử dụng kinh phí, đoàn phí và các nguồn lực phục vụ hoạt động Đoàn theo đúng quy định, bảo đảm công khai, minh bạch; phối hợp với kế toán thực hiện việc thanh quyết toán theo quy định.", "output": "Sổ thu chi đoàn phí", "sourceDue": "Hằng quý", "kind": "Thường xuyên", "base": 10.0, "coef": 1.0, "max": 10.0, "evidence": "Sổ thu chi, chứng từ quyết toán", "source": "To_van_phong.xlsx / TLTN", "mandatory": true, "periodic": false}, {"id": "TLTN-13", "role": "TLTN", "title": "Theo dõi, tổng hợp, sơ kết, tổng kết và đánh giá kết quả công tác Đoàn và phong trào thanh niên; quản lý hồ sơ, số liệu, sản phẩm và minh chứng hoạt động.", "output": "Báo cáo sơ kết/tổng kết", "sourceDue": "30/9/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Báo cáo công tác Đoàn định kỳ", "source": "To_van_phong.xlsx / TLTN", "mandatory": true, "periodic": false}, {"id": "TLTN-14", "role": "TLTN", "title": "Thực hiện chế độ báo cáo định kỳ, đột xuất; tham mưu đề xuất giải pháp nâng cao chất lượng công tác Đoàn và phong trào thanh niên, đồng thời thực hiện các nhiệm vụ khác theo phân công của Hiệu trưởng.", "output": "Văn bản báo cáo/Tờ trình", "sourceDue": "30/9/2026", "kind": "Thường xuyên", "base": 10.0, "coef": 1.1, "max": 11.0, "evidence": "Văn bản báo cáo nộp BGH/Đoàn cấp trên", "source": "To_van_phong.xlsx / TLTN", "mandatory": true, "periodic": false}];
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
function kpiV2Workspace_(u,p){p=p||{};const period=kpiCfg_().period,people=kpiPeople_(),all=kpiRows_('kpi_cong_viec').filter(t=>t.period===period&&!kpiV2Bool_(t.cancelled)),allowed=all.filter(t=>t.email===u.email||kpiV2Rights_(u,t).check||u.roles.includes('TPVP')&&people.some(p=>p.email===t.email&&kpiScope_(u,p,false))),others=allowed.filter(t=>t.email!==u.email).sort((a,b)=>((a.planStatus==='pending'||a.reviewStatus==='pending')?0:1)-((b.planStatus==='pending'||b.reviewStatus==='pending')?0:1)||String(a.due).localeCompare(String(b.due))||String(a.id).localeCompare(String(b.id))),pageSize=40,pages=Math.max(1,Math.ceil(others.length/pageSize)),page=Math.min(pages,Math.max(1,Number.isInteger(Number(p.page))?Number(p.page):1)),focus=p.focusTaskId?others.filter(t=>t.id===p.focusTaskId):null;if(p.focusTaskId&&!focus.length)throw Error('Không có quyền với nhiệm vụ yêu cầu.');const selected=allowed.filter(t=>t.email===u.email).concat(focus||others.slice((page-1)*pageSize,page*pageSize)),emails=[...new Set(selected.map(t=>t.email))];const tasks=emails.flatMap(email=>kpiTasks_(email,period)).filter(t=>selected.some(a=>a.id===t.id)).map(t=>({...t,person:kpiPublicUser_(people.find(p=>p.email===t.email)),rights:kpiV2Rights_(u,t)}));return {tasks,page:focus?1:page,pages:focus?1:pages,totalOther:focus?focus.length:others.length,pageSize,focused:!!focus,people:people.filter(p=>p.email===u.email||kpiScope_(u,p,false)).map(kpiPublicUser_),plans:kpiRows_('kpi_ke_hoach').filter(r=>r.period===period&&(r.email===u.email||people.some(p=>p.email===r.email&&kpiScope_(u,p,false)))),delegations:kpiRows_('kpi_phan_cap').filter(r=>r.period===period&&(r.owner===u.email||r.delegate===u.email||u.roles.some(x=>['HT','PHT'].includes(x)))),appeals:kpiRows_('kpi_phan_hoi').filter(r=>r.period===period&&(r.email===u.email||people.some(p=>p.email===r.email&&kpiScope_(u,p,true)))),lock:kpiRows_('kpi_chot_ky').find(r=>r.period===period)||{status:'open',version:0}};}
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


function kpiClientCfg_(){const c=kpiCfg_();return {period:c.period,schoolRule:c.schoolRule,bonusMode:c.bonusMode,schoolQuarters:kpiV2JSON_(c.schoolQuarters,null)};}
function kpiRawRows_(name){return (tables[name]||[]).map(r=>structuredClone(r));}
function kpiWrite_(name,o){if(!headers[name])throw Error('Bảng không hợp lệ');const rows=tables[name]||(tables[name]=[]);const row=o._row||Math.max(1,...rows.map(r=>r._row))+1;const value={_row:row};headers[name].forEach(k=>value[k]=o[k]===undefined?'':typeof o[k]==='object'?JSON.stringify(o[k]):o[k]);const i=rows.findIndex(r=>r._row===row);if(i<0)rows.push(value);else rows[i]=value;writes.set(name+'|'+row,{table_name:name,row_no:row,data:value});if(KPI_READ_CACHE)delete KPI_READ_CACHE[name];KPI_INDEX_CACHE={};if(name==='gvcnv')KPI_PEOPLE_CACHE=null;}
function kpiSheet_(name){return {getLastRow:()=>Math.max(1,...(tables[name]||[]).map(r=>r._row))};}
function kpiLocked_(fn){return fn();}
function kpiAuth_(token){if(!actor||token!==sessionToken)throw Error('Phiên không hợp lệ');const u=kpiPeople_().find(x=>x.email===actor);if(!u)throw Error('Không có tài khoản');return u;}
function kpiFile_(f,u,t){if(!f)return {fileId:'',fileName:''};return prepareFile(f,u,t);}
function kpiSetPerson_(){throw Error('Mật khẩu do dịch vụ xác thực quản lý');}

/* 3.2: source catalog, mandatory assignment and unit-wide review. */
const OFFICE_ROLES=['TBTN','TVIEN','TVTL','GIAOVU','QS','TTVP','TPVP','VT','KT','TQUY','YTE','CNTT','BV','PV','TLTN'];
const leader=u=>u.roles.some(r=>['TTCM','TTVP'].includes(r));
const deputy=u=>u.roles.some(r=>['TPCM','TPVP'].includes(r));
const bgh=u=>u.roles.some(r=>['HT','PHT'].includes(r));
const obligatory=id=>CURRENT_CATALOG.find(c=>c.id===id)?.mandatory===true;
const oldScope=kpiScope_,oldRights=kpiV2Rights_,oldDispatch=kpiDispatch_,oldOverview=kpiOverview_,oldWorkspace=kpiV2Workspace_,oldSummary=kpiSummary_,oldPeople=kpiLegacyPeople_;
kpiLegacyPeople_=function(){return oldPeople().map(u=>{if(!String(kpiPick_(u.raw,['Vai trò KPI']))){const job=kpiNorm_(kpiPick_(u.raw,['Chức vụ'])),unit=kpiNorm_(u.unit);if(unit.includes('van phong')){u.roles=u.roles.filter(r=>!['GVBM','TTCM','TPCM'].includes(r));if(job.includes('to truong'))u.roles.push('TTVP');if(job.includes('to pho'))u.roles.push('TPVP');const pairs=[['ke toan','KT'],['thu quy','TQUY'],['van thu','VT'],['y te','YTE'],['bao ve','BV'],['phuc vu','PV'],['thu vien','TVIEN'],['thiet bi','TBTN'],['giao vu','GIAOVU'],['cong nghe thong tin','CNTT']];for(const [s,r]of pairs)if(job.includes(s))u.roles.push(r);}}return u;});};
kpiScope_=function(u,t,write){if(u.email===t.email)return !write;if(bgh(u))return true;if(!write&&u.roles.includes('TPVP')&&u.unit===t.unit&&kpiRows_('kpi_phan_cap').some(d=>d.period===kpiCfg_().period&&d.delegate===u.email&&d.unit===u.unit&&kpiV2Bool_(d.active)&&d.from<=kpiV2Today_()&&d.until>=kpiV2Today_()&&kpiPeople_().some(p=>p.email===d.owner&&leader(p)&&p.unit===u.unit)))return true;return leader(u)&&!!u.unit&&u.unit===t.unit&&(!write||!bgh(t)&&!leader(t));};
kpiV2Delegations_=function(u,t,period){const today=kpiV2Today_();return kpiRows_('kpi_phan_cap').filter(d=>d.period===period&&kpiV2Bool_(d.active)&&d.delegate===u.email&&d.from<=today&&d.until>=today&&t.email!==u.email&&kpiV2JSON_(d.teachers,[]).includes(t.email)&&kpiV2JSON_(d.roles,[]).includes(t.role)&&(!kpiV2JSON_(d.criterionIds,[]).length||kpiV2JSON_(d.criterionIds,[]).includes(t.criterionId))&&(!kpiV2JSON_(d.taskIds,[]).length||kpiV2JSON_(d.taskIds,[]).includes(t.id))&&kpiPeople_().some(p=>p.email===d.owner&&(p.roles.includes('HT')&&u.roles.includes('PHT')||leader(p)&&deputy(u)&&p.unit===u.unit&&d.unit===u.unit&&kpiPeople_().some(x=>x.email===t.email&&x.unit===u.unit&&!leader(x)&&!bgh(x)))));};
kpiV2Rights_=function(u,t){const target=kpiPeople_().find(x=>x.email===t.email),ds=kpiV2Delegations_(u,t,t.period);const full=target&&u.email!==target.email&&(u.roles.includes('HT')||(u.roles.includes('PHT')&&!leader(target))||leader(u)&&u.unit&&u.unit===target.unit&&!leader(target)&&!bgh(target));return {check:!!full||!!ds.length,final:!!full||ds.some(d=>kpiV2Bool_(d.finalApproval)),owner:full?u.email:ds[0]?.owner||''};};
function mandatoryProvision(u,period){const created=[];for(const c of CURRENT_CATALOG.filter(c=>c.mandatory&&u.roles.includes(c.role))){if(kpiRows_('kpi_cong_viec').some(t=>t.period===period&&t.email===u.email&&t.criterionId===c.id))continue;const t={id:Utilities.getUuid(),email:u.email,period,criterionId:c.id,title:c.title,role:c.role,output:c.output,due:'',kind:c.kind,base:c.base,coef:c.coef,inPlan:true,planStatus:'approved',planAt:new Date().toISOString(),progress:0,quality:0,completed:false,reviewStatus:'draft',version:1,cancelled:false,note:'Nhiệm vụ bắt buộc theo vai trò; người quản lý ấn định hạn.'};kpiWrite_('kpi_cong_viec',t);created.push(t.id);}const plan=kpiRows_('kpi_ke_hoach').find(p=>p.email===u.email&&p.period===period);if(!plan){const ids=CURRENT_CATALOG.filter(c=>c.mandatory&&u.roles.includes(c.role)).map(c=>c.id);if(ids.length)kpiWrite_('kpi_ke_hoach',{id:Utilities.getUuid(),email:u.email,period,requiredIds:JSON.stringify(ids),status:'confirmed',note:'Kế hoạch bắt buộc tự ghi nhận theo danh mục và vai trò. Hạn do quản lý ấn định.',reviewer:'SYSTEM-MANDATORY',version:1});}return created;}
function assignmentDate(v,period){const day=kpiV2Date_(v),y=Number(period.slice(0,4));if(day<`${y}-08-01`||day>`${y+1}-08-31`)throw Error('Hạn phải nằm trong năm học đang đánh giá.');return day;}
function quarterRange(p={}){const period=kpiCfg_().period,y=Number(period.slice(0,4)),q=Number(p.quarter);if(!Number.isInteger(q)||q<1||q>4)throw Error('Chọn Quý I–IV.');const defaults=[[`${y}-09-05`,`${y}-11-06`],[`${y}-11-07`,`${y+1}-01-09`],[`${y+1}-01-10`,`${y+1}-03-12`],[`${y+1}-03-13`,`${y+1}-05-29`]];const configured=kpiV2JSON_(kpiCfg_().schoolQuarters,null),a=configured?.[q-1]||defaults[q-1];const from=kpiV2Date_(p.from||a[0]),to=kpiV2Date_(p.to||a[1]);if(from>to||from<`${y}-08-01`||to>`${y+1}-08-31`)throw Error('Khoảng quý phải nằm trong năm học, từ đầu tháng 8 đến hết tháng 8 năm sau.');return {number:q,label:['Quý I','Quý II','Quý III','Quý IV'][q-1],from,to};}
function quarterlyPerson(u,q){let A=0,B=0,done=0,missing=0,count=0,undated=0;const tasks=[];for(const t of kpiTasks_(u.email,kpiCfg_().period).filter(t=>!t.cancelled&&t.planStatus==='approved')){if(!t.due){undated++;continue;}if(t.occurrences){const active=t.occurrences.filter(o=>o.status!=='cancelled'),den=active.reduce((a,o)=>a+o.weight,0),selected=active.filter(o=>o.due>=q.from&&o.due<=q.to);if(!selected.length)continue;let a=0,b=0;for(const o of selected){const max=t.base*t.coef*o.weight/den;if(t.inPlan)a+=max;if(o.status==='approved'){b+=max*(.3*o.progress/100+.7*o.quality/100);if(o.completed&&o.quality>=60)done++;}else missing++;count++;}A+=a;B+=b;tasks.push({...t,occurrences:selected,quarterMax:KpiCore.round(a),quarterScore:KpiCore.round(b),due:selected.map(o=>o.due).sort().pop()});}else if(t.due>=q.from&&t.due<=q.to){const a=t.inPlan?t.base*t.coef:0,b=t.reviewStatus==='approved'?KpiCore.score(t).actual:0;A+=a;B+=b;count++;if(t.reviewStatus==='approved'&&t.completed&&t.quality>=60)done++;else missing++;tasks.push({...t,quarterMax:KpiCore.round(a),quarterScore:KpiCore.round(b)});}}
return {user:kpiPublicUser_(u),tasks,general:[],bonuses:[],summary:{A:KpiCore.round(A),B:KpiCore.round(B),kpi:A?KpiCore.round(Math.min(70,B/A*70)):null,general:null,reward:null,total:null,count,done,pending:missing,missing,undated,future:0,provisional:true,excellentEligible:false,exceedRate:null,rating:'Báo cáo công việc quý; chưa xếp loại chất lượng năm'}};}
function mandatoryBatch(u,p,apply){const period=kpiCfg_().period,q=p.quarter?quarterRange(p):null;const mode=p.mode==='check'?'check':'review';kpiRequiredText_(p.note,'căn cứ duyệt theo lô');const unit=String(p.unit||u.unit||'');if(!unit)throw Error('Chọn tổ cần xử lý.');if(!bgh(u)&&unit!==u.unit)throw Error('Không có quyền với tổ này.');if(!bgh(u)&&!leader(u)&&!deputy(u))throw Error('Chỉ người có quyền kiểm tra/duyệt mới được xử lý theo lô.');const items=[],skipped=[];for(const t of kpiRows_('kpi_cong_viec').filter(t=>t.period===period&&!kpiV2Bool_(t.cancelled)&&obligatory(t.criterionId)&&kpiPeople_().some(x=>x.email===t.email&&x.unit===unit)&&(!p.role||t.role===p.role))){const r=kpiV2Rights_(u,t);if(!(mode==='check'?r.check:r.final))continue;const os=kpiRows_('kpi_dot').filter(o=>o.taskId===t.id&&o.status!=='cancelled');if(os.length){for(const o of os){if(q&&(o.due<q.from||o.due>q.to))continue;if(!['pending','checked'].includes(o.status))continue;items.push({action:mode==='check'?'checkOccurrence':'reviewOccurrence',id:o.id,version:Number(o.version),accept:p.accept!==false,note:p.note,progress:Number(o.progress),quality:Number(o.quality)});}}else if(t.reviewStatus==='pending'&&t.planStatus==='approved'){if(!t.due){skipped.push({id:t.id,reason:'Chưa có hạn'});continue;}if(q&&(t.due<q.from||t.due>q.to))continue;if(mode==='check'){skipped.push({id:t.id,reason:'Nhiệm vụ một lần cần người được giao quyền duyệt cuối'});continue;}items.push({action:'review',id:t.id,version:Number(t.version),accept:p.accept!==false,note:p.note,progress:Number(t.progress),quality:Number(t.quality)});}}
return {items,skipped};}
const baseBulk=kpiV2BulkItem_;
kpiV2BulkItem_=function(u,period,item,apply){const o=kpiRows_('kpi_dot').find(o=>o.id===item.id),t=kpiRows_('kpi_cong_viec').find(t=>t.id===(o?.taskId||item.id));if(['review','approvePlan'].includes(item.action)&&t){if(!kpiV2Rights_(u,t).final)throw Error('Chưa được phân công duyệt cuối.');if(apply){const savedScope=kpiScope_;kpiScope_=(v,target,write)=>write&&v.email===u.email&&target.email===t.email?true:savedScope(v,target,write);try{return baseBulk(u,period,item,true);}finally{kpiScope_=savedScope;}}const savedScope=kpiScope_;kpiScope_=(v,target,write)=>write&&v.email===u.email&&target.email===t.email?true:savedScope(v,target,write);try{return baseBulk(u,period,item,false);}finally{kpiScope_=savedScope;}}return baseBulk(u,period,item,apply);};
kpiSummary_=function(u,period){const s=oldSummary(u,period),ts=kpiTasks_(u.email,period).filter(t=>!t.cancelled&&t.planStatus==='approved');const undated=ts.filter(t=>!t.due);s.undated=undated.length;const unplannedA=undated.filter(t=>t.inPlan).reduce((sum,t)=>sum+t.base*t.coef,0);s.dueA=KpiCore.round(s.dueA-unplannedA);s.missing=Math.max(0,s.missing-undated.length);s.dueKpi=s.dueA?KpiCore.round(Math.min(70,s.dueB/s.dueA*70)):null;if(s.undated){s.provisional=true;s.excellentEligible=false;}return s;};
kpiOverview_=function(u){const s=oldOverview(u);s.version='3.2.0-supabase';if(bgh(u))s.people=kpiPeople_().map(kpiPublicUser_);s.deferredBonuses=kpiRows_('kpi_thuong_chuyen_ky').filter(r=>r.email===u.email||u.roles.includes('HT'));return s;};
kpiV2Workspace_=function(u,p){const s=oldWorkspace(u,p);for(const t of s.tasks)t.mandatory=obligatory(t.criterionId);s.units=[...new Set(kpiPeople_().filter(t=>bgh(u)||t.unit===u.unit).map(t=>t.unit).filter(Boolean))];if(bgh(u))s.people=kpiPeople_().map(kpiPublicUser_);else if(deputy(u)&&kpiRows_('kpi_phan_cap').some(d=>d.delegate===u.email&&kpiV2Bool_(d.active)&&d.from<=kpiV2Today_()&&d.until>=kpiV2Today_()))s.people=kpiPeople_().filter(t=>t.unit===u.unit).map(kpiPublicUser_);return s;};
kpiDispatch_=function(action,p={},token){KPI_READ_CACHE={};KPI_INDEX_CACHE={};KPI_PEOPLE_CACHE=null;const u=kpiAuth_(token),period=kpiCfg_().period;u._token=token;
if(action==='report'||action==='reportPage'){if(!bgh(u)&&!leader(u))throw Error('Báo cáo dành cho TTCM/TTVP và BGH.');if(p.quarter){const q=quarterRange(p),people=kpiPeople_().filter(t=>kpiScope_(u,t,false));const page=Number(p.page||1),pages=Math.max(1,Math.ceil(people.length/10));if(!Number.isInteger(page)||page<1||page>pages)throw Error('Trang báo cáo không hợp lệ.');return {period,quarter:q,rule:kpiCfg_().schoolRule,method:'KPI công việc quý = B quý / A quý × 70. Phân bổ đợt theo trọng số trên toàn nhiệm vụ năm. Không cộng điểm chung/thưởng năm hoặc tự suy ra xếp loại quý.',generatedAt:new Date().toISOString(),page,pages,revision:String(kpiSheet_('kpi_nhat_ky').getLastRow()),people:(action==='report'?people:people.slice((page-1)*10,page*10)).map(t=>quarterlyPerson(t,q))};}return kpiV2ReportPage_(u,p);}
if(['graduateBonus','approveGraduateBonus'].includes(action)){if(kpiV2Locked_(period))throw Error('Kỳ đã chốt.');return kpiV2Once_(u,action,p,()=>{if(action==='graduateBonus'){const examYear=Number(p.examYear);if(!Number.isInteger(examYear)||examYear<2026||examYear>2100)throw Error('Năm thi không hợp lệ.');const t=kpiTasks_(u.email,period).find(t=>t.id===p.taskId&&t.reviewStatus==='approved');if(!t)throw Error('Chọn nhiệm vụ đã duyệt đủ kết quả.');if(!['Tốt nghiệp bằng Thành phố','Tốt nghiệp cao hơn Thành phố'].includes(p.category))throw Error('Chỉ áp dụng thành tích tốt nghiệp.');if(kpiRows_('kpi_thuong_chuyen_ky').some(r=>r.email===u.email&&Number(r.examYear)===examYear&&r.status!=='rejected'))throw Error('Năm thi này đã có đề xuất; không kê khai trùng.');const row={id:Utilities.getUuid(),email:u.email,sourcePeriod:period,targetPeriod:`${examYear}-${examYear+1}`,examYear,assessmentYear:examYear+1,taskId:t.id,category:p.category,reference:kpiRequiredText_(p.reference,'số liệu/kết quả thi'),requested:p.category==='Tốt nghiệp bằng Thành phố'?1:2,approved:0,status:'pending',version:1,at:new Date().toISOString()};kpiWrite_('kpi_thuong_chuyen_ky',row);kpiAudit_(u,action,row.id,null,row);return row;}if(!u.roles.includes('HT'))throw Error('Hiệu trưởng xác nhận thành tích chuyển kỳ.');if(kpiCfg_().bonusMode!=='school')throw Error('Cần ban hành quy chế điểm thưởng trường trước khi xác nhận.');const row=kpiRows_('kpi_thuong_chuyen_ky').find(r=>r.id===p.id);kpiV2Version_(row,p);if(row.email===u.email)throw Error('Không được tự duyệt thành tích.');if(row.status!=='pending')throw Error('Thành tích đã xử lý.');const before={...row};row.status=p.accept?'confirmed':'rejected';row.approved=p.accept?Number(row.requested):0;row.reviewer=u.email;row.reviewNote=kpiRequiredText_(p.note,'căn cứ xác nhận');if(p.accept)kpiWrite_('kpi_thuong',{id:row.id,email:row.email,period:row.targetPeriod,taskId:row.taskId,category:row.category,reference:row.reference+'\nNăm thi '+row.examYear+'; năm ghi nhận '+row.assessmentYear,requested:row.requested,approved:row.approved,status:'approved',reviewer:u.email,updatedAt:new Date().toISOString()});return kpiV2Save_('kpi_thuong_chuyen_ky',u,action,row,before);});}
if(action==='bonus'&&String(p.category).startsWith('Tốt nghiệp'))throw Error('Kê khai năm thi trong luồng thành tích chuyển kỳ.');
if(['provisionMandatory','assignOffice','setDeadline','setUnitSchedule','delegateUnit','unitBulkPreview','unitBulkCommit'].includes(action)){if(kpiV2Locked_(period))throw Error('Năm học đã chốt. Mở lại trước khi sửa.');return kpiV2Once_(u,action,p,()=>{
if(action==='provisionMandatory'){if(!bgh(u)&&!leader(u))throw Error('Chỉ BGH/tổ trưởng được đồng bộ.');let n=0;for(const t of kpiPeople_().filter(t=>bgh(u)||t.unit===u.unit))n+=mandatoryProvision(t,period).length;kpiAudit_(u,action,period,null,{created:n});return {created:n};}
if(action==='assignOffice'){if(!u.roles.includes('HT'))throw Error('Hiệu trưởng phân công vai trò văn phòng.');const t=kpiPeople_().find(t=>t.email===p.email);if(!t||bgh(t))throw Error('Nhân sự không hợp lệ.');if(!Array.isArray(p.roles)||!p.roles.length||p.roles.some(r=>!OFFICE_ROLES.includes(r))||new Set(p.roles).size!==p.roles.length)throw Error('Chọn vai trò văn phòng hợp lệ.');if(p.roles.includes('TTVP')&&p.roles.includes('TPVP'))throw Error('Không đồng thời là tổ trưởng và tổ phó.');const existing=kpiTasks_(t.email,period).filter(t=>!t.cancelled);if(existing.some(t=>t.due||t.reviewStatus!=='draft'||t.occurrences?.length||!obligatory(t.criterionId)))throw Error('Nhân sự đã có lịch/hồ sơ thực hiện. Cần rà soát riêng trước khi đổi vai trò.');for(const task of existing){const raw=kpiRows_('kpi_cong_viec').find(r=>r.id===task.id),before={...raw};raw.cancelled=true;raw.note+='\nThay phân công văn phòng: '+kpiRequiredText_(p.note,'quyết định phân công');kpiV2Save_('kpi_cong_viec',u,'replacePristineAssignment',raw,before);}const before={...t.raw};kpiWrite_('gvcnv',{...t.raw,'Vai trò KPI':p.roles.join(' '),Tổ:'Văn phòng','Lớp chủ nhiệm':'','Hòa nhập':''});const priorPlan=kpiRows_('kpi_ke_hoach').find(r=>r.email===p.email&&r.period===period);if(priorPlan)kpiWrite_('kpi_ke_hoach',{...priorPlan,requiredIds:JSON.stringify(CURRENT_CATALOG.filter(c=>c.mandatory&&p.roles.includes(c.role)).map(c=>c.id)),status:'confirmed',note:'Kế hoạch bắt buộc theo quyết định phân công văn phòng',version:Number(priorPlan.version)+1});const after=kpiPeople_().find(x=>x.email===p.email);mandatoryProvision(after,period);kpiAudit_(u,action,p.email,before,{roles:p.roles,unit:'Văn phòng',note:kpiRequiredText_(p.note,'quyết định phân công')});return {ok:true};}
if(action==='delegateUnit'){const d=kpiPeople_().find(t=>t.email===p.delegate);const unit=String(p.unit||u.unit||'');if(!u.roles.includes('HT')&&unit!==u.unit)throw Error('Chỉ phân công trong tổ mình.');if(!d||d.email===u.email||!(u.roles.includes('HT')&&d.roles.includes('PHT')||leader(u)&&deputy(d)&&d.unit===u.unit))throw Error('HT phân công HP; tổ trưởng phân công tổ phó trong tổ.');const teachers=kpiPeople_().filter(t=>t.unit===unit&&t.email!==u.email&&t.email!==d.email&&!bgh(t)&&(!leader(t)||u.roles.includes('HT'))).map(t=>t.email);if(!teachers.length)throw Error('Tổ chưa có nhân sự phù hợp.');const roles=p.roles;if(!Array.isArray(roles)||!roles.length||roles.some(r=>!CURRENT_CATALOG.some(c=>c.role===r)))throw Error('Chọn nhóm nhiệm vụ hợp lệ.');kpiV2Date_(p.from);kpiV2Date_(p.until);if(p.from>p.until)throw Error('Khoảng phân công không hợp lệ.');const row={id:Utilities.getUuid(),period,unit,delegate:d.email,teachers:JSON.stringify(teachers),roles:JSON.stringify(roles),taskIds:'[]',criterionIds:'[]',from:p.from,until:p.until,finalApproval:p.finalApproval===true,active:true,owner:u.email,note:kpiRequiredText_(p.note,'căn cứ phân công')};return kpiV2Save_('kpi_phan_cap',u,action,row,null);}
if(action==='setDeadline'||action==='setUnitSchedule'){const targets=kpiRows_('kpi_cong_viec').filter(t=>t.period===period&&!kpiV2Bool_(t.cancelled)&&(action==='setDeadline'?t.id===p.id:t.criterionId===p.criterionId&&kpiPeople_().some(x=>x.email===t.email&&x.unit===(p.unit||u.unit))));if(!targets.length)throw Error('Không có nhiệm vụ phù hợp.');const changed=[],skipped=[];for(const t of targets){if(!kpiV2Rights_(u,t).final){skipped.push({id:t.id,reason:'Không có quyền hoặc nhiệm vụ của chính mình'});continue;}if(action==='setDeadline')kpiV2Version_(t,p);if(kpiRows_('kpi_dot').some(o=>o.taskId===t.id)||!['draft','partial'].includes(t.reviewStatus)){skipped.push({id:t.id,reason:'Đã có đợt/kết quả; dùng gia hạn có lý do'});continue;}const before={...t};if(p.items){if(!Array.isArray(p.items)||p.items.length<2||p.items.length>60)throw Error('Cần 2–60 đợt.');const items=p.items.map(o=>({id:Utilities.getUuid(),taskId:t.id,email:t.email,period,name:kpiRequiredText_(o.name,'tên đợt'),due:assignmentDate(o.due,period),weight:Number(o.weight),status:'draft',progress:0,quality:0,completed:false,version:1}));if(items.some(o=>!Number.isFinite(o.weight)||o.weight<=0||o.weight>10000))throw Error('Trọng số phải dương.');items.forEach(o=>kpiWrite_('kpi_dot',o));t.due=items.map(o=>o.due).sort().pop();}else{if(CURRENT_CATALOG.find(c=>c.id===t.criterionId)?.periodic)throw Error('GVBM-2 và 4 cần cấu hình các đợt.');t.due=assignmentDate(p.due,period);}t.note+='\nẤn định hạn: '+kpiRequiredText_(p.note,'căn cứ thời hạn');kpiV2Save_('kpi_cong_viec',u,action,t,before);changed.push(t.id);}return {changed,skipped};}
if(action==='unitBulkPreview'){const batch=mandatoryBatch(u,p,false),items=batch.items;const results=items.map(item=>{try{return {ok:true,data:kpiV2BulkItem_(u,period,item,false)};}catch(e){return {ok:false,id:item.id,error:e.message};}});const previewId=Utilities.getUuid();CacheService.getScriptCache().put('kpi-unit-preview-'+previewId,JSON.stringify({actor:u.email,period,items,results}),600);return {previewId,results,skipped:batch.skipped};}
if(action==='unitBulkCommit'){const saved=CacheService.getScriptCache().get('kpi-unit-preview-'+p.previewId);if(!saved)throw Error('Lượt xem lại hết hạn 10 phút.');const b=JSON.parse(saved);if(b.actor!==u.email||b.period!==period)throw Error('Không được xác nhận lượt của người khác.');const prior=kpiRows_('kpi_yeu_cau').find(r=>r.id===p.previewId);if(prior)return JSON.parse(prior.result);const results=b.items.map((item,i)=>{if(!b.results[i].ok)return b.results[i];try{const row=kpiV2BulkItem_(u,period,item,true);return {ok:true,id:item.id,status:row.status||row.reviewStatus,version:row.version};}catch(e){return {ok:false,id:item.id,error:e.message};}});const out={results};kpiWrite_('kpi_yeu_cau',{id:p.previewId,actor:u.email,action,at:new Date().toISOString(),result:JSON.stringify(out)});return out;}
});}
if(action==='register'&&obligatory(p.criterionId))throw Error('Nhiệm vụ bắt buộc được tạo sẵn; không đăng ký lại.');
if(action==='submit'){const t=kpiRows_('kpi_cong_viec').find(t=>t.id===p.id);if(t&&obligatory(t.criterionId)&&!t.due)throw Error('Tổ trưởng/BGH chưa ấn định thời hạn.');if(t&&CURRENT_CATALOG.find(c=>c.id===t.criterionId)?.periodic&&!kpiRows_('kpi_dot').some(o=>o.taskId===t.id))throw Error('Cần tổ trưởng thiết lập các đợt trước khi nộp.');}
if(['plan','general','decision','reviewBonus'].includes(action)&&p.email){const target=kpiPeople_().find(t=>t.email===p.email);if(target&&leader(target)&&u.roles.includes('PHT')&&!kpiRows_('kpi_cong_viec').some(t=>t.email===target.email&&kpiV2Rights_(u,t).final))throw Error('Hiệu trưởng chưa phân công HP phụ trách tổ này.');}
if(['review','approvePlan','cancel'].includes(action)){const t=kpiRows_('kpi_cong_viec').find(t=>t.id===p.id);if(t&&!kpiV2Rights_(u,t).final)throw Error('Không được tự duyệt hoặc chưa được phân công duyệt cuối.');if(t&&obligatory(t.criterionId)&&['cancel','approvePlan'].includes(action))throw Error('Nhiệm vụ bắt buộc không cần duyệt đăng ký.');if(t&&action==='review'){const savedScope=kpiScope_;kpiScope_=(v,target,write)=>write&&v.email===u.email&&target.email===t.email?true:savedScope(v,target,write);try{return oldDispatch(action,p,token);}finally{kpiScope_=savedScope;}}}
return oldDispatch(action,p,token);
};

return {dispatch:(a,p,t=sessionToken)=>kpiDispatch_(a,p,t),publicData:()=>({version:'3.2.0-supabase',config:kpiClientCfg_(),catalog:kpiRows_('bang_luong_hoa_kpi')}),people:()=>kpiPeople_().map(kpiPublicUser_),writes:()=>[...writes.values()],cacheWrites:()=>[...cacheWrites.values()]};
}

