import tkinter as tk

# ---------------- WINDOW ----------------
root = tk.Tk()
root.title("Python Animation")
root.resizable(False, False)

WIDTH = 500
HEIGHT = 400

canvas = tk.Canvas(root, width=WIDTH, height=HEIGHT, bg="black")
canvas.pack()

# ---------------- BALL ----------------
ball = canvas.create_oval(20, 20, 60, 60, fill="red")

dx = 5   # speed in x direction
dy = 4   # speed in y direction

# ---------------- ANIMATION FUNCTION ----------------
def animate():
    global dx, dy

    canvas.move(ball, dx, dy)
    x1, y1, x2, y2 = canvas.coords(ball)

    # Collision with walls
    if x1 <= 0 or x2 >= WIDTH:
        dx = -dx
    if y1 <= 0 or y2 >= HEIGHT:
        dy = -dy

    root.after(20, animate)  # smooth animation

# ---------------- START ----------------
animate()
root.mainloop()
