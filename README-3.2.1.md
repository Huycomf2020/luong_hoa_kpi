# KPI 3.2.1 — Nhân sự theo quyết định 420 và bản sao Google Sheet

App vẫn đọc/ghi Supabase. Google Sheet chỉ nhận bản sao một chiều; sửa Sheet không sửa Supabase. Không thêm yêu cầu Google Sheet vào đường đăng nhập, nộp kết quả hoặc duyệt hồ sơ.

Nhân sự được đối chiếu 89 dòng quyết định 420/QĐ-THPTLN ngày 22/8/2026; giữ ba tài khoản BGH ngoài danh sách. Giữ email, thông tin xác thực và phân công GVCN/hòa nhập hiện có. Hai tên được chuẩn hóa sau đối chiếu/xác nhận. Chuyên môn văn phòng để trống theo nguồn; không lấy trình độ đào tạo thay cho chuyên môn. Không đưa bản nhân sự chứa email hoặc dữ liệu xác thực lên GitHub.

## Cài bản sao tự động một lần

1. Trong app chính, đăng nhập HT hoặc quản trị viên có quyền; mở **Công việc & duyệt → Thiết lập đồng bộ Sheet**.
2. Sao chép mã được tạo riêng. Mở bảng Google Sheet hiện tại → **Tiện ích mở rộng → Apps Script**, thêm tệp **KpiMirror.gs**, dán mã. Giữ Code.gs hiện tại.
3. Chọn **setupKpiMirror → Chạy**, cấp quyền cho Google Sheet, UrlFetch và lịch chạy. Không cần deploy exec mới.
4. Trở lại app → **Kiểm tra đồng bộ** để thấy phiên bản đã xác nhận. Sau cài đặt, lịch chạy mỗi 5 phút; lịch Google có thể trễ. Bấm tạo mã mới sẽ thu hồi mã cũ: phải cập nhật lại KpiMirror.gs. Khóa chỉ đọc có hạn một năm.

Chỉ dán mã chứa khóa vào Apps Script riêng của bảng được chỉ định; không dán lên GitHub, không gửi cho giáo viên. Endpoint kiểm tra khóa băm, hạn sử dụng, đúng bảng đích và giới hạn lượt gọi. Không xuất mật khẩu/hash/salt, phiên đăng nhập, bí mật cấu hình hay nhật ký xác thực. Cột xác thực cũ trong gvcnv được giữ nguyên để không phá luồng xác minh mật khẩu chuyển tiếp; cột đó không đại diện cho mật khẩu mới trên Supabase.

Lịch lấy bản sao có khóa tránh chạy chồng; chỉ ghi khi Supabase thay phiên bản. Ghép gvcnv bằng email duy nhất, không suy đoán tên; thiếu tài khoản sẽ báo lỗi trước khi ghi roster. Nội dung dạng công thức được ghi thành văn bản. Chỉ xác nhận phiên bản sau khi tất cả bảng đã ghi xong; lần ghi lỗi sẽ được thử lại ở lịch tiếp theo.

Trong lần nâng cấp, nhân sự, danh mục, nhiệm vụ và kế hoạch đã được sao chép ban đầu bằng kết nối Google Sheet. **Lịch tự động chưa chạy cho đến khi hoàn thành bước cấp quyền trên Google.**

## Kiểm tra

`npm test` bao gồm kiểm thử mirror: giới hạn quyền, khóa hết hạn, không xuất dữ liệu xác thực, giữ cột mật khẩu cũ, chặn tài khoản không khớp, chống công thức khi sao chép và bỏ qua phiên bản không thay đổi. Giữ bộ kiểm thử các vai trò, nhiệm vụ định kỳ, duyệt lô, khóa kỳ, Excel/PDF và demo.
