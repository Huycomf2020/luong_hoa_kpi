# KPI THPT Lộc Ninh — phiên bản 2.0.0

Ứng dụng chính: https://huycomf2020.github.io/luong_hoa_kpi/ . Chỉ dùng `index.html`.

## Cập nhật: chỉ thao tác với một file Apps Script

1. Trong Google Sheet đang sử dụng, tạo **một bản sao dự phòng**. Mở Tiện ích mở rộng → Apps Script. Thay toàn bộ nội dung **Code.gs** bằng file **Code.gs trong bộ cập nhật này**. Không dán thêm các module hoặc bản gộp cũ.
2. Lưu → chọn hàm **initializeKpiSystem** → Chạy. Hàm bổ sung các sheet mới; không xóa nhiệm vụ, nhân sự, mật khẩu hash/salt hay cấu hình hiện có. Nếu báo cấu trúc sheet khác phiên bản, dừng và kiểm tra, không xóa sheet để chạy lại.
3. **Triển khai → Quản lý các bản triển khai → biểu tượng bút chì → Phiên bản mới → Triển khai**. Cập nhật bản triển khai đang sử dụng để giữ nguyên URL `/exec`; thực thi bằng tài khoản chủ sở hữu, quyền truy cập theo cấu hình web app hiện có.
4. Mở app, tải lại bằng Ctrl+F5. Dòng trạng thái phải hiện backend **2.0.0-2026.10.06**. Giáo viên không cần dán URL. Nếu tạo bản triển khai mới với URL khác, quản trị viên sửa đúng **DEFAULT_API_URL** trong `index.html` một lần cho cả trường.

Giao diện, logo, biểu tượng và các tệp cài trên màn hình chính nằm trong cùng repo. Khi tự đưa bộ ZIP lên repo, giữ nguyên cấu trúc thư mục `icons`; thay các tệp trùng tên. Không đổi đường dẫn app sang tên HTML khác.

## Bắt đầu dùng nghiệp vụ mới

- Giáo viên đăng ký nhiệm vụ ở **Thành tích** như trước. TTCM/BGH duyệt giao việc.
- Trong **Công việc & duyệt**, người có quyền chọn nhiệm vụ đã giao nhưng chưa nộp → **Thiết lập các đợt**. Mỗi dòng: `Tên đợt | yyyy-mm-dd | trọng số`. Ví dụ 8 đợt trọng số 1 chia đều điểm của một nhiệm vụ.
- Giáo viên nộp **từng đợt**. TPCM được phân cấp kiểm tra; TTCM/BGH hoặc TPCM được cấp quyền duyệt cuối quyết định điểm. Không nộp/duyệt lại điểm của nhiệm vụ cha.
- Duyệt hàng loạt hỗ trợ giao việc, kết quả việc một lần, kiểm tra/duyệt các đợt: chọn tối đa 40 hồ sơ → ghi nhận xét → **xem lại** → **xác nhận** → đọc kết quả từng dòng.
- TTCM phân công TPCM theo tổ viên, nhóm vai trò, đề mục cụ thể và có thể giới hạn ID nhiệm vụ, thời gian. Mặc định **chỉ kiểm tra/đề nghị**. Có thể thu hồi phân công.
- TTCM/BGH rà soát danh mục bắt buộc theo phân công thực tế, xác nhận đủ kế hoạch A. Muốn đổi A phải mở lại kế hoạch có căn cứ. Với BGH hoặc người chưa có danh mục nguồn, đăng ký nhiệm vụ bổ sung thực tế, duyệt rồi đưa nhiệm vụ đó vào kế hoạch; không tự đặt điểm riêng cho chức danh.
- Đối chiếu mã sản phẩm, phần đóng góp và bối cảnh trước khi duyệt. Kiểm tra trùng dựa trên **mã sản phẩm đã khai**, không tự nhận diện nội dung của ảnh/tệp. Phần đóng góp dùng đối chiếu, không tự nhân giảm điểm nhiệm vụ.
- Minh chứng không bắt buộc: ảnh chụp hoặc PDF/Word/Excel tải từ VnEdu đều có thể đính kèm; tối đa 10 MB. App tự đổi tên và lưu vào thư mục Drive đã cấu hình. Không kết nối trực tiếp VnEdu.
- Danh sách công việc người khác chia 40 hồ sơ/trang; dùng Trang trước/Trang sau, tìm kiếm lọc trong trang hiện tại. Báo cáo vẫn lấy đủ mọi người trong phạm vi; app tải theo nhóm 10 người để giảm kích thước mỗi lần lấy dữ liệu, dừng xuất nếu dữ liệu đổi giữa các nhóm.
- Đọc hướng dẫn từng vai trò và sơ đồ quy trình trong **Giới thiệu trường**.

## Điểm và chốt năm học

Điểm đợt được duyệt = điểm tối đa nhiệm vụ × trọng số đợt / tổng trọng số đợt còn hiệu lực × (30% tiến độ + 70% chất lượng). Cộng các đợt và làm tròn **ở tổng nhiệm vụ**. Ví dụ 8 đợt đạt 100% của nhiệm vụ 10 điểm: tổng 10 điểm, không phải 80 điểm.

Đợt chưa duyệt không tính B. Đợt tương lai vẫn thuộc kế hoạch năm nhưng không bị liệt kê là thiếu **đến hạn**. App hiển thị KPI cả năm tạm tính và KPI đến hạn riêng. Mức xếp loại theo quyết định được ghi nhận riêng với điểm KPI.

Hiệu trưởng chốt khi đủ kế hoạch đã xác nhận, kết quả đến hạn, tiêu chí chung, quyết định xếp loại và phản hồi; không còn đợt tương lai hoặc đề xuất giao việc/thưởng đang chờ. Bản chốt lưu tại `kpi_chot_ket_qua`; dữ liệu lớn được chia phần theo `part/parts`, ghép `data` theo thứ tự để đối chiếu. Chốt khóa các thao tác sửa nghiệp vụ. Mở lại cần căn cứ, vẫn giữ bản chốt trước.

Tiến độ 0/60/80/100 và chất lượng do giáo viên kê khai, người duyệt xác nhận theo quy chế. App tự tính điểm; chưa tự tính ngày làm việc theo lịch công tác của trường. Quy chế điểm thưởng, tỷ lệ và các điều kiện nguồn vẫn cần nhà trường phê duyệt trước khi áp dụng.

## Kiểm tra và phạm vi

Các bài kiểm tra mô phỏng Apps Script/Google Sheet, kiểm tra DOM và xuất workbook thực nằm trong `tests`. Xem `KIEM_THU.md` để biết các tình huống đã kiểm tra. Chưa có thử tải đồng thời 90 người trên Google Apps Script thật; chưa cập nhật bản APK cài trước đây. Nhắc việc vẫn dùng lịch điện thoại, chưa có push khi đóng app.

Người phát triển chạy: `npm install` → `npm test`. Quản trị viên nhà trường **không cần chạy các bài kiểm tra này** để triển khai app.

Các module trong thư mục `kpi` của repo cũ là tài liệu lịch sử; hướng dẫn và file triển khai hiện hành là **README.md và Code.gs ở thư mục gốc**.
