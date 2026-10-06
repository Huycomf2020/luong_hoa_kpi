# KPI 3.0 — Database backend

This directory contains the database schema and server implementation for the KPI web application. It contains no personnel records, password values, session tokens, private source-file identifiers, or server API keys.

Operational data is accessed through the authenticated server API. The browser receives only the data permitted by the user's assigned role and organizational scope. Browser roles have no direct access to operational tables. Server keys must remain in the deployment environment.

The scoring and approval engine is preserved from the validated reference implementation. Each request has isolated state. Writes use an atomic transaction with revision and session checks; bulk operations preserve preview, per-item decisions, version checks and idempotency.

Existing evidence links remain supported. New optional evidence is private and requires permission checks before a temporary viewing link is issued.

## Maintaining the domain

`functions/kpi-api/domain.js` is generated; do not edit it manually.

```
node kpi-v2/supabase/functions/kpi-api/build-domain.cjs
node kpi-v2/tests/backend.test.cjs
node kpi-v2/tests/supabase-workflows.test.mjs
node kpi-v2/tests/ui.test.cjs
```

The optional source-comparison test needs a private, sanitized snapshot supplied through `KPI_SOURCE_SNAPSHOT`. Never commit that snapshot or import payloads.

Deploy the server entry point and generated domain together. The function checks application sessions itself. The client uses a publishable key, never a server key. Source-system reconciliation and credential migration are managed in the protected environment; the old source is not a second live writer.

See the project validation notes for measured performance and remaining limits. A synthetic burst test does not replace ongoing monitoring of real devices and networks.

## Quản trị tài khoản (3.1)
Quyền `kpi_credentials.is_admin` độc lập với chức vụ KPI, do chủ dự án cấp trong SQL Editor. Không có quyền tự cấp quản trị qua trình duyệt. Tab Quản trị tài khoản cho phép chọn nhân sự, ghi lý do, xác nhận đúng người và tạo mật khẩu tạm dùng trong 24 giờ. Mật khẩu tạm chỉ hiển thị một lần, không được lưu/log; bắt buộc đổi khi đăng nhập. Thu hồi toàn bộ phiên cũ và ghi nhật ký không chứa mật khẩu.

Nếu quản trị viên quên mật khẩu, chủ dự án chạy `select public.kpi_admin_recovery('tai-khoan-quan-tri');` trong SQL Editor. Hàm chỉ dành cho chủ dự án, không cấp EXECUTE cho service_role/anon/authenticated. Copy mã trả về vào Đăng nhập → Quên mật khẩu → Khôi phục quản trị viên cùng tài khoản và mật khẩu mới. Mã dùng một lần, hết hạn sau 10 phút; DB chỉ lưu SHA256 của mã. Không đưa mã vào URL, GitHub, log hay chat.

Mật khẩu/hash/salt cũ không thể đọc ngược. Không xóa hash, không cần sửa Code.gs. Khôi phục thành công chuyển tài khoản cũ sang xác thực Supabase; quyền đánh giá KPI không đổi. Thao tác đặt lại kiểm tra lại phiên, quyền quản trị và phiên bản tài khoản trong một giao dịch. Không tự đặt lại hàng loạt.
