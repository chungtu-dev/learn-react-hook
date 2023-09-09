mục đích sử dụng useEffect để ko phải gọi lại action

use to call API
action event CRUD

nó giống như created của VUE (render lần đầu khi các component được render)

nếu một action muốn gọi lại useEffect thì gán cho useEffect một phần tử thứ 2 là array dependency
    - truyền vô 1 state, để khi giá trị state đó thay đổi thì mới thực hiện gọi useEffect
    - truyền vào array dependency 1 empty [], thì useEffect đó sẽ chỉ được gọi lại 1 lần

+ clean up function : mục đích trong function dùng để clean đi các dữ liệu đã chạy trước đó