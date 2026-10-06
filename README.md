# Lượng hóa KPI THPT Lộc Ninh — 3.0 Supabase

App chính thức dùng `index.html` tại https://huycomf2020.github.io/luong_hoa_kpi/ .

Dữ liệu vận hành đã chuyển sang dự án Supabase `gvmhaiotbqipoqwokilz` tại Singapore. Không cần dán exec, thay Code.gs hoặc chạy initializeKpiSystem để sử dụng bản mới. Trên Windows, nhấn Ctrl+F5 sau cập nhật.

- 92 nhân sự và 59 đề mục được đối chiếu với nguồn; không tạo điểm/nhiệm vụ giả.
- Các vai trò, nhiệm vụ định kỳ, phân cấp, xem lại rồi duyệt hàng loạt, phản hồi, chốt kỳ và xuất báo cáo giữ bộ quy tắc hiện có.
- Mật khẩu cũ được giữ khả năng sử dụng. Riêng hai tài khoản đã có hash Apps Script, lần đăng nhập thành công đầu tiên xác minh một lần qua hệ thống cũ rồi chuyển sang xác thực native. Không tắt bản triển khai cũ trước khi hoàn tất bước này.
- Mật khẩu đổi trong app mới lưu ở Supabase; không đồng bộ ngược về Google Sheet.
- Sheet cũ là nguồn đối chiếu, không tự nhận các thay đổi mới. Cập nhật công việc trong app mới.
- Minh chứng Drive cũ vẫn mở bằng liên kết cũ. Minh chứng mới lưu riêng tư trên Supabase Storage, tên tự đặt, không bắt buộc đính kèm. Chưa bật bản sao tự động sang Google Drive.
- Favicon SVG dùng logo trường và cắt bỏ nền vuông trắng.

Chi tiết kỹ thuật và bảo mật: [supabase/README.md](supabase/README.md). Kiểm thử: [KIEM_THU.md](KIEM_THU.md). `Code.gs` được giữ để đối chiếu bộ quy tắc và hỗ trợ chuyển mật khẩu, không còn là backend vận hành mới.
