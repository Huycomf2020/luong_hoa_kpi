# Kiểm tra KPI 2.0 — 06/10/2026

**Kết quả:** các bài kiểm tra backend và DOM/XLSX hoàn tất thành công.

| Nhóm | Tình huống đã kiểm tra |
|---|---|
| Khởi tạo | Chạy hai lần; giữ danh mục 59 nhiệm vụ và cấu trúc dữ liệu cũ; thêm bảng mới |
| Tài khoản | Nhận vai trò GVBM/GVCN/hòa nhập từ nhân sự; hash/salt; đổi mật khẩu; thu hồi phiên; đăng nhập bằng mật khẩu mới |
| Phân quyền | Giáo viên không đọc tổ khác, không tự duyệt; TTCM chỉ trong tổ; TPCM cần phân cấp; PHT/HT xem toàn trường |
| Nhiệm vụ định kỳ | 8 đợt chung trần 10 điểm; trọng số, trả lại, miễn đợt, đợt chưa duyệt; chặn nộp/ghi đè điểm cha |
| Phân cấp | Chỉ kiểm tra, chưa được duyệt cuối; giới hạn tổ viên; thu hồi có hiệu lực khi backend xử lý |
| Kế hoạch | Đủ việc bắt buộc mới xác nhận A; chặn thêm/hủy việc trong A đã xác nhận |
| Duyệt hàng loạt | Xem lại không ghi quyết định; kiểm tra lại phiên bản khi xác nhận; hồ sơ thay đổi bị chặn; các hồ sơ hợp lệ vẫn lưu; xác nhận lại không ghi lặp |
| Đối chiếu | Một mã sản phẩm không dùng cho hai nhiệm vụ của cùng người; phần đóng góp có giới hạn |
| Phản hồi | Chỉ phản hồi nhiệm vụ mình; người có quyền trả lời; không tự xử lý phản hồi mình |
| Chốt kỳ | Chặn người không phải HT; chặn thiếu dữ liệu; chốt thật trong mô phỏng 6 người; giữ snapshot; khóa sửa; mở lại vẫn giữ bản chốt |
| Giao diện | Khởi động không lỗi JavaScript trong DOM; nút theo vai trò; popup; đợt riêng; minh chứng không bắt buộc; hướng dẫn 5 nhóm vai trò; sơ đồ 3 bước |
| Báo cáo | Sinh và đọc lại workbook XLSX thực bằng ExcelJS; có sheet đợt và đối chiếu; điểm cha định kỳ đúng; HTML in PDF có chi tiết từng đợt và dấu hiệu tạm tính |
| Dữ liệu lớn | Mô phỏng danh sách 91 người; 40 hồ sơ/trang, không trùng giữa trang; báo cáo 10 người/trang; mỗi sheet chỉ đọc một lần trong một lượt overview; chặn báo cáo khi phiên dữ liệu đổi giữa các trang |
| Kết nối | Không còn nhập URL theo trình duyệt; dùng URL chung; cảnh báo backend cũ |

## Giới hạn của kết quả kiểm tra

- Backend chạy trên mô phỏng Spreadsheet/Cache/Lock/Auth, không ghi thử vào Google Sheet nhân sự thật.
- Giao diện được kiểm tra bằng JSDOM; chưa kiểm tra ảnh chụp bố cục trên thiết bị Android/iPhone thật.
- PDF được kiểm tra nội dung HTML để in; chưa xác nhận phân trang trên từng trình duyệt/máy in.
- Chưa đo tải 90 người đồng thời trên Google Apps Script thật, chưa kiểm tra upload Drive thật và các quyền chia sẻ thư mục của trường.
- Khoá Script ngăn các thao tác app đồng thời ghi đè; Google Sheet không cung cấp giao dịch nhiều bảng. Nếu dịch vụ Google lỗi giữa lần ghi, cần tải lại và đối chiếu nhật ký; không có cam kết tuyệt đối về giao dịch như cơ sở dữ liệu chuyên dụng.

Không có tài khoản, mật khẩu hay dữ liệu cá nhân thật trong các bộ kiểm tra.


## Supabase 3.0 — 06/10/2026

- All 17 source headers and every imported row match the normalized source. 92 personnel, 59 catalogue items, 1 general-score row, 2 audit rows and 5 settings; source was re-read before cutover and had no changes.
- Nine missing unit fields normalized from the unique explicit same-subject unit; no new duties or scores invented. All 92 KPI summaries match the Apps Script engine exactly.
- The full existing business suite also passes across fresh Supabase domain instances, persisted writes and persisted preview cache.
- Live API: unauthenticated overview rejected; native login returns identity plus initial overview; principal sees 92 people.
- Live SQL in a rollback transaction verified atomic writes, stale-revision rejection, credential-version increment, and revocation of all sessions on password change. No test data persisted.
- Supabase security advisor: zero findings after explicit deny policies and browser grant revocation.
- Burst of 90 native-account logins: 90/90 success, zero errors. Latest external measurement p50 14.998s, p95 16.373s; server logs p95 approximately 4.506s. These numbers include a synthetic simultaneous burst and a remote network path, not 90 real Vietnamese phones. Do not promise one-second peak login.
- Burst of 90 authenticated overview reads: 90/90 success, zero errors; external p50 14.421s, p95 16.299s.
- UI: one direct fetch per operation; no Apps Script JSONP/polling; login includes overview; public bootstrap is not a login prerequisite; existing role controls, recurring dialogs and detailed PDF/XLSX export tests pass.
- Two already-hashed accounts retain one-time old-server verification on first successful login; their real current passwords were not requested or tested. Google Drive links retained; new uploads use private Supabase Storage.
- Remaining limits: no 90-user concurrent-write/device endurance test; compatibility engine still reads a database snapshot rather than materialized per-user summaries; automatic Sheet/Drive replication and rebuilt Android APK are not included in this cutover.
