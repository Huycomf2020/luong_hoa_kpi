# KPI – Trường THPT Lộc Ninh

**Chỉ cần quan tâm 2 tệp:**

- **luonghoa.html**: app đã gộp toàn bộ mã giao diện. `index.html` là cùng app để mở ở trang chủ.
- **Code.gs**: toàn bộ mã Google Apps Script, giống bản KPI-Combined.gs đã cung cấp.

## Nếu đã thay Code.gs, chạy initializeKpiSystem và triển khai

Không cần làm lại phần Apps Script nếu đã chạy thành công. Trang cũ `/2026-2027/luonghoa.html` dùng HTML cũ nên gọi sai API. Hãy dùng app ở repo này.

1. Trong repo này, chọn **Settings → Pages**. Source = **Deploy from a branch**; Branch = **main**; Folder = **/(root)**; bấm **Save**.
2. Sau khi GitHub Pages báo đã xuất bản, mở **https://huycomf2020.github.io/luong_hoa_kpi/** (hoặc `/luonghoa.html`).
3. Nếu báo chưa kết nối: bấm **Kết nối Google Sheet**, dán URL ứng dụng web kết thúc bằng `/exec` từ Apps Script rồi bấm **Lưu và kiểm tra kết nối**. Khi thấy **Đã kết nối Google Sheet**, đăng nhập Thành tích. Thiết lập URL này lưu trên trình duyệt đang dùng; mặc định toàn trường hiện vẫn dùng URL đã cung cấp trước đây.

Nếu cập nhật phiên bản trong deployment cũ thì URL không đổi. Nếu tạo deployment mới riêng thì phải dùng URL mới.

Chạy đúng hàm **initializeKpiSystem** (chữ Kpi như tên này). Trong lần đầu, cấp quyền cần thiết. Khi triển khai, chọn thực thi bằng tài khoản quản lý và quyền truy cập phù hợp để trang GitHub gửi yêu cầu. Không đưa danh sách tài khoản/mật khẩu vào repo.

App chứa danh mục và công thức nên Quy định vẫn hiện khi backend chưa kết nối. Dữ liệu người dùng cần đăng nhập và backend có quyền với Google Sheet.

## File còn lại

Thư mục `kpi`, `tests` và hướng dẫn chi tiết dành cho bảo trì. **Không cần chép các file này vào Apps Script. Không cần tạo thêm file .gs nếu đã dùng Code.gs.**

Xem `kpi/README-KPI.md` khi cần đối chiếu nguồn, công thức, phân quyền và quy chế thưởng. Tệp Code.gs là bản ghép, không cài đồng thời với KpiBackend.gs/KpiCore.gs/KpiCatalog.gs.
