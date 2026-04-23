# Ngày 23/4/2026--- Nguyễn Trường Minh
import os
import sys
import json
import threading
import requests
from datetime import datetime, timedelta
from tkinter import *
from tkinter import ttk, messagebox
from tkcalendar import DateEntry

# - Tên tệp lưu cấu hình
CONFIG_FILE = "settings.json"

def load_settings():
    if os.path.exists(CONFIG_FILE):
        try:
            with open(CONFIG_FILE, 'r') as f: return json.load(f)
        except: pass
    return {}

def save_settings(settings):
    try:
        with open(CONFIG_FILE, 'w') as f: json.dump(settings, f)
    except: pass

def run_app():
    root = Tk()
    root.title("Tải bản đồ Synop Thái Lan")

    # - Căn giữa màn hình
    window_width = 600
    window_height = 500
    screen_width = root.winfo_screenwidth()
    screen_height = root.winfo_screenheight()
    center_x = int(screen_width/2 - window_width / 2)
    center_y = int(screen_height/2 - window_height / 2)
    root.geometry(f'{window_width}x{window_height}+{center_x}+{center_y}')
    root.resizable(True, True)

    # - Thêm biểu tượng (Icon)
    try:
        root.iconbitmap("BieuTuong.ico")
    except:
        pass # Bỏ qua nếu không tìm thấy file BieuTuong.ico

    main_frame = Frame(root)
    main_frame.pack(fill=BOTH, expand=True, padx=10, pady=10)

    hom_nay_dt = datetime.today()
    hom_qua_dt = hom_nay_dt - timedelta(days=1)

    frame_date = Frame(main_frame)
    frame_date.pack(fill=X, pady=5)

    sub_date_container = Frame(frame_date)
    sub_date_container.pack(anchor=CENTER)

    Label(sub_date_container, text='Ngày bắt đầu: ', font=('Times New Roman', 12), fg="blue").pack(side=LEFT, padx=5)
    entry1 = DateEntry(sub_date_container, width=12, font=('Times New Roman', 12),
                       year=hom_qua_dt.year, month=hom_qua_dt.month, day=hom_qua_dt.day, date_pattern='dd/mm/yyyy', justify='center')
    entry1.pack(side=LEFT, padx=10)

    Label(sub_date_container, text='Ngày kết thúc:', font=('Times New Roman', 12), fg="blue").pack(side=LEFT, padx=5)
    entry2 = DateEntry(sub_date_container, width=12, font=('Times New Roman', 12),
                       year=hom_nay_dt.year, month=hom_nay_dt.month, day=hom_nay_dt.day, date_pattern='dd/mm/yyyy', justify='center')
    entry2.pack(side=LEFT, padx=10)

    frame_settings = Frame(main_frame)
    frame_settings.pack(fill=X, pady=5)

    frame_source = LabelFrame(frame_settings, text=" Chọn loại bản đồ ", font=("Times New Roman", 10, "bold"), fg="#004080")
    frame_source.pack(side=LEFT, fill=BOTH, expand=True, padx=5)

    inner_grid = Frame(frame_source)
    inner_grid.pack(anchor=CENTER, pady=5)

    saved_charts = load_settings()
    chart_vars = {
        "topchart": IntVar(value=saved_charts.get("topchart", 1)),
        "925hpa": IntVar(value=saved_charts.get("925hpa", 0)),
        "850hpa": IntVar(value=saved_charts.get("850hpa", 1)),
        "700hpa": IntVar(value=saved_charts.get("700hpa", 0)),
        "500hpa": IntVar(value=saved_charts.get("500hpa", 0)),
        "300hpa": IntVar(value=saved_charts.get("300hpa", 0)),
        "200hpa": IntVar(value=saved_charts.get("200hpa", 0))
    }

    col, row = 0, 0
    for c_type, var in chart_vars.items():
        chk = Checkbutton(inner_grid, text=c_type.upper(), variable=var, font=("Times New Roman", 10))
        chk.grid(row=row, column=col, sticky='w', padx=15, pady=2)
        col += 1
        if col > 3:
            col, row = 0, row + 1

    frame_buttons = Frame(main_frame)
    frame_buttons.pack(fill=X, pady=5)

    sub_btn_container = Frame(frame_buttons)
    sub_btn_container.pack(anchor=CENTER)

    button1 = Button(sub_btn_container, text=' TẢI VỀ ', font=("Times New Roman", 11, "bold"), bg="#f0f0f0", fg="blue", width=12)
    button1.pack(side=LEFT, padx=10)

    label_status = Label(main_frame, text="Sẵn sàng", font=('Times New Roman', 11, "italic"), fg="blue")
    label_status.pack(pady=(0, 2))

    progress = ttk.Progressbar(main_frame, mode='determinate')
    progress.pack(fill=X, padx=5, pady=2)

    frame_log = Frame(main_frame)
    frame_log.pack(fill=BOTH, expand=True, pady=5)

    scrollbar = Scrollbar(frame_log)
    scrollbar.pack(side=RIGHT, fill=Y)

    # - Giảm chiều cao ô log xuống 3 (xấp xỉ 2/3 so với 5 trước đây)
    log_text = Text(frame_log, height=3, font=('Times New Roman', 10), yscrollcommand=scrollbar.set)
    log_text.pack(side=LEFT, fill=BOTH, expand=True)
    scrollbar.config(command=log_text.yview)

    label_contact = Label(main_frame, text="Tác giả: Nguyễn Trường Minh - SĐT: 0389615358", font=('Times New Roman', 10, 'italic'), fg="#006495")
    label_contact.pack(side=BOTTOM, pady=2)

    def log_message(message):
        log_text.insert(END, message + "\n")
        log_text.see(END)

    def toggle_ui_state(state):
        button1.config(state=state)
        entry1.config(state=state)
        entry2.config(state=state)

    def process_download():
        save_settings({k: v.get() for k, v in chart_vars.items()})

        toggle_ui_state(DISABLED)
        log_text.delete(1.0, END)

        start_date = entry1.get_date()
        end_date = entry2.get_date()

        if start_date > end_date:
            messagebox.showerror("Lỗi", "Ngày bắt đầu không được lớn hơn ngày kết thúc!")
            toggle_ui_state(NORMAL)
            return

        selected_charts = [k for k, v in chart_vars.items() if v.get() == 1]
        if not selected_charts:
            messagebox.showwarning("Cảnh báo", "Vui lòng chọn ít nhất một mực bản đồ!")
            toggle_ui_state(NORMAL)
            return

        now = datetime.now()
        current_hour = now.hour
        today_date = now.date()

        delta = end_date - start_date
        total_days = delta.days + 1
        all_tasks = []

        for i in range(total_days):
            c_date = start_date + timedelta(days=i)
            for c_type in selected_charts:
                possible_steps = ["00", "12"] if c_type in ["700hpa", "500hpa", "300hpa", "200hpa"] else ["00", "06", "12", "18"]

                for t_step in possible_steps:
                    if c_date == today_date:
                        if t_step == "00" and current_hour < 13: all_tasks.append((c_date, c_type, t_step))
                        elif t_step in ["00", "06"] and 13 <= current_hour < 19: all_tasks.append((c_date, c_type, t_step))
                        elif t_step in ["00", "06", "12"] and current_hour >= 19: all_tasks.append((c_date, c_type, t_step))
                    elif c_date == (today_date - timedelta(days=1)):
                        if t_step == "18":
                            if current_hour >= 1: all_tasks.append((c_date, c_type, t_step))
                        else:
                            all_tasks.append((c_date, c_type, t_step))
                    else:
                        all_tasks.append((c_date, c_type, t_step))

        progress['maximum'] = len(all_tasks) if all_tasks else 1
        progress['value'] = 0
        headers = {"User-Agent": "Mozilla/5.0", "Referer": "https://www.tmd.go.th/"}

        log_message(f"Bắt đầu xử lý {len(all_tasks)} bản đồ...")

        for c_date, c_type, t_step in all_tasks:
            d_s, m_n, m_s, y_s = c_date.strftime("%d"), c_date.strftime("%m"), c_date.strftime("%B").lower(), c_date.strftime("%Y")

            save_dir = os.path.join(y_s, f"{y_s}_{m_n}", f"{y_s}_{m_n}_{d_s}")
            if not os.path.exists(save_dir): os.makedirs(save_dir)

            prefix = "w600" if c_type == "925hpa" else c_type

            f_names = []
            if c_type == "topchart" and t_step == "00":
                f_names = [f"{prefix}_{d_s}_{m_s}_{y_s}_{t_step}fw.jpg", f"{prefix}_{d_s}_{m_s}_{y_s}_{t_step}.jpg"]
            else:
                f_names = [f"{prefix}_{d_s}_{m_s}_{y_s}_{t_step}.jpg"]

            # - Bước 1: Kiểm tra xem đã có bất kỳ định dạng file nào tồn tại chưa
            already_exists = False
            for f_name in f_names:
                if os.path.exists(os.path.join(save_dir, f_name)):
                    log_message(f"[~] Đã có sẵn: {f_name}")
                    label_status.config(text=f"Bỏ qua: {f_name}")
                    already_exists = True
                    break

            # - Bỏ qua vòng lặp tải nếu file đã tồn tại
            if already_exists:
                progress['value'] += 1
                root.update_idletasks()
                continue

            # - Bước 2: Bắt đầu tải nếu chưa có file
            download_ok = False
            for f_name in f_names:
                url = f"https://www.tmd.go.th/media/forecast/airmap/{f_name}?ver={int(datetime.now().timestamp())}"
                try:
                    label_status.config(text=f"Đang tải: {f_name}")
                    r = requests.get(url, headers=headers, stream=True, timeout=10)
                    if r.status_code == 200:
                        with open(os.path.join(save_dir, f_name), 'wb') as f:
                            for chunk in r.iter_content(1024): f.write(chunk)
                        log_message(f"[+] Tải mới: {f_name}")
                        download_ok = True
                        break
                except: continue

            if not download_ok: log_message(f"[-] Không có: {c_type}_{t_step}_{d_s}/{m_n}")

            progress['value'] += 1
            root.update_idletasks()

        label_status.config(text="Hoàn tất!")
        log_message("\n=== KẾT THÚC QUÁ TRÌNH ===")
        toggle_ui_state(NORMAL)
        messagebox.showinfo("Xong", "Đã xử lý xong dữ liệu!")

    def Taive():
        threading.Thread(target=process_download, daemon=True).start()

    button1.config(command=Taive)
    root.mainloop()

if __name__ == "__main__":
    run_app()
