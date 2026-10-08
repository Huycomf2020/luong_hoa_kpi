# KPI 3.2 – nhiệm vụ bắt buộc, văn phòng và báo cáo quý

Trang chính: https://huycomf2020.github.io/luong_hoa_kpi/
Bản thử: https://huycomf2020.github.io/luong_hoa_kpi/demo/

233 đề mục được đối chiếu từ hai file Excel ngày 08/10/2026: 59 đề mục giáo viên, 174 đề mục văn phòng (15 nhóm). GVBM-14: nguồn ghi tối đa 10 nhưng 10 × 1,1 = 11; app dùng 11 và ghi trong source-corrections.json.

- GVBM-1–12, GVCN, TPCM, TTCM, hòa nhập và chức danh văn phòng: tự tạo công việc và ghi nhận kế hoạch A theo vai trò; không qua đăng ký. Hạn ban đầu để trống, không sao chép ngày quý III/2026 vào năm học.
- TTCM/TTVP hoặc BGH ấn định hạn cho cả tổ theo đề mục. Việc cá nhân quản lý phải do cấp khác xử lý. GVBM-2 và 4 bắt buộc nộp theo đợt; mẫu 8 giáo án / 13 nhập điểm có thể sửa trước khi cấu hình. Một nhiệm vụ chỉ có một trần điểm, các đợt chia theo trọng số.
- Duyệt theo tổ lấy tất cả hồ sơ chờ duyệt ở máy chủ, không phụ thuộc trang hiện tại, không cần chọn người. Có xem lại trước khi lưu; phiên bản/quyền được kiểm tra lại từng dòng. Không nâng điểm đã kê khai; trả lại cả lô hoặc xử lý riêng. GVBM-13/14 và việc giao riêng loại khỏi lô này.
- HT phân công vai trò văn phòng; không tự gán theo tên người. Chỉ thay các phân công còn trống lịch/kết quả, giữ dấu vết hồ sơ cũ. Nhân sự đã có lịch/kết quả cần rà soát riêng. Danh sách nguồn hiện không có nhân sự văn phòng rõ ràng; không tạo người thật từ suy đoán.
- Tổ viên văn phòng chỉ xem mình. TTVP xem cả tổ; TPVP được phân cấp theo tổ, nhóm và thời gian. PHT duyệt TTCM/TTVP khi HT phân công rõ ràng.
- Quý tạm theo lựa chọn của người dùng: QI 05/9/2026–06/11/2026; QII 07/11/2026–09/1/2027; QIII 10/1/2027–12/3/2027; QIV 13/3/2027–29/5/2027. Hai quý/học kỳ; ảnh nguồn chưa có dòng THPT. Người quản lý chỉnh được khoảng ngày xuất. Không lấy đây là lịch THPT chính thức.
- A/B quý chỉ lấy việc và đợt có hạn trong khoảng quý, phân bổ trọng số trên toàn năm; KPI công việc = min(70, B/A ×70). Không tự dùng điểm chung, thưởng hoặc xếp loại năm cho quý. Kết quả là báo cáo công việc, không tự kết luận chất lượng viên chức quý.
- Thi tốt nghiệp 2027 → năm ghi nhận 2028/kỳ 2027–2028. Có bảng chuyển kỳ và chống trùng theo người/năm thi. HT chỉ xác nhận thưởng khi bonusMode=school theo quy chế đã ban hành. Điểm không cộng vào kỳ 2026–2027; tổng thưởng vẫn chịu trần hiện hành.
- Excel font Times New Roman: tiêu đề 14, nội dung 13, biểu bảng 12. PDF mở văn bản in A4 → Lưu thành PDF bằng trình duyệt; biểu bảng 12pt. Không tạo liên kết Drive giả cho file Supabase.

Dữ liệu/mật khẩu thật không nằm trong repository. Minh chứng vẫn không bắt buộc. Luồng xác thực, đổi/reset mật khẩu, session version và quyền quản trị kỹ thuật được giữ nguyên.

Kiểm tra: npm ci && npm test. `tests/supabase-workflows.test.mjs` là bộ kiểm thử luồng đăng ký cũ 3.1 và không dùng cho 3.2; bộ miền nghiệp vụ 3.2 là mandatory.test.mjs. Các test Apps Script kiểm tra phần nền cũ riêng; Code.gs không phải backend vận hành hiện tại. Không chạy trình build-domain cũ để ghi đè miền 3.2.
