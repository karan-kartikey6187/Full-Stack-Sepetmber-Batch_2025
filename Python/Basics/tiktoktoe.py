import tkinter as tk
from tkinter import messagebox

# ---------------- WINDOW ----------------
root = tk.Tk()
root.title("Tic Tac Toe")
root.resizable(False, False)

current_player = "X"
buttons = []

# ---------------- FUNCTIONS ----------------
def check_winner():
    win_positions = [
        (0,1,2), (3,4,5), (6,7,8),   # rows
        (0,3,6), (1,4,7), (2,5,8),   # columns
        (0,4,8), (2,4,6)             # diagonals
    ]

    for a, b, c in win_positions:
        if buttons[a]["text"] == buttons[b]["text"] == buttons[c]["text"] != "":
            return buttons[a]["text"]

    if all(button["text"] != "" for button in buttons):
        return "Draw"

    return None

def on_click(index):
    global current_player

    if buttons[index]["text"] == "":
        buttons[index]["text"] = current_player

        result = check_winner()
        if result:
            if result == "Draw":
                messagebox.showinfo("Game Over", "It's a Draw!")
            else:
                messagebox.showinfo("Game Over", f"Player {result} Wins!")
            reset_game()
        else:
            current_player = "O" if current_player == "X" else "X"

def reset_game():
    global current_player
    current_player = "X"
    for button in buttons:
        button["text"] = ""

# ---------------- UI ----------------
frame = tk.Frame(root)
frame.pack()

for i in range(9):
    btn = tk.Button(
        frame,
        text="",
        font=("Arial", 24),
        width=5,
        height=2,
        command=lambda i=i: on_click(i)
    )
    btn.grid(row=i//3, column=i%3)
    buttons.append(btn)

reset_btn = tk.Button(
    root,
    text="Restart Game",
    font=("Arial", 14),
    command=reset_game
)
reset_btn.pack(pady=10)

root.mainloop()
