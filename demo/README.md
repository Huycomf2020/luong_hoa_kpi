# Demo KPI — thử vai trò

Mở demo/index.html qua GitHub Pages. Chọn vai trò rồi bấm Vào vai trò này; không cần mật khẩu để bắt đầu. Các tài khoản @example.test và mọi sản phẩm/điểm đều giả lập. Dữ liệu lưu localStorage riêng, không kết nối Apps Script hoặc Supabase; CSP chặn mọi fetch/XHR. Đây là mô phỏng nghiệp vụ, không là kiểm thử bảo mật hay tải của máy chủ thật.

- Trong năm: 8 đợt giáo án, chờ giao việc, chờ kiểm tra/duyệt, phân cấp TPCM, điểm chung, thưởng và phản hồi.
- Cuối năm: chọn tình huống và Làm lại dữ liệu demo; tất cả hồ sơ đủ điều kiện thử chốt/mở lại. Ngày giả lập là 01/06/2027.
- GV: nộp đợt → TPCM kiểm tra → TTCM duyệt cuối; cùng một nhiệm vụ chỉ có một trần điểm. TTCM chỉ xem tổ, BGH xem toàn trường, không tự duyệt.
- Quản trị tài khoản độc lập với quyền chuyên môn. Đặt lại sẽ tạo mật khẩu tạm, thu hồi phiên và buộc đổi trong demo. Mật khẩu mặc định của tài khoản mẫu: DemoKpi2026!; không dùng mật khẩu thật. Mã khôi phục Supabase không áp dụng ở demo; Làm lại khôi phục dữ liệu/tài khoản mẫu.
- Minh chứng demo tối đa 1 MB, chỉ lưu trên trình duyệt này. Không tải tài liệu thật. Thử xuất Excel/PDF bằng dữ liệu giả; Excel dùng thư viện CDN ghim phiên bản 4.4.0. Lịch nhắc là tệp mẫu, không nên nhập vào lịch công việc thật.
- Làm lại xóa các lượt thử trên thiết bị hiện tại. Các thiết bị không chia sẻ dữ liệu demo.

Bộ nghiệp vụ là bản chụp domain.js của app 3.1, chạy trên dữ liệu giả. Xác thực được mô phỏng ở kernel.js; fingerprint nội bộ phục vụ chống lặp không dùng để bảo vệ tài khoản thật. Chạy `node tests/demo.test.cjs` để kiểm tra phạm vi vai trò, 8 đợt, phân cấp, mật khẩu tạm và chốt/mở lại; index.html chính thức không bị thay thế.
