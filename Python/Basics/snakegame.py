import tkinter as tk
import random

# ---------------- WINDOW ----------------
root = tk.Tk()
root.title("Snake Game")
root.resizable(False, False)

WIDTH = 400
HEIGHT = 400
CELL = 20

canvas = tk.Canvas(root, width=WIDTH, height=HEIGHT, bg="black")
canvas.pack()

# ---------------- GAME VARIABLES ----------------
direction = "Right"
score = 0
snake = [(100, 100), (80, 100), (60, 100)]

food_x = random.randint(0, (WIDTH - CELL) // CELL) * CELL
food_y = random.randint(0, (HEIGHT - CELL) // CELL) * CELL

# ---------------- DRAW FUNCTIONS ----------------
def draw_snake():
    canvas.delete("snake")
    for x, y in snake:
        canvas.create_rectangle(
            x, y, x + CELL, y + CELL,
            fill="green", tag="snake"
        )

def draw_food():
    canvas.delete("food")
    canvas.create_oval(
        food_x, food_y,
        food_x + CELL, food_y + CELL,
        fill="red", tag="food"
    )

# ---------------- MOVEMENT ----------------
def move_snake():
    global food_x, food_y, score

    head_x, head_y = snake[0]

    if direction == "Up":
        new_head = (head_x, head_y - CELL)
    elif direction == "Down":
        new_head = (head_x, head_y + CELL)
    elif direction == "Left":
        new_head = (head_x - CELL, head_y)
    else:
        new_head = (head_x + CELL, head_y)

    # Collision with wall or self
    if (new_head in snake or
        new_head[0] < 0 or new_head[0] >= WIDTH or
        new_head[1] < 0 or new_head[1] >= HEIGHT):
        game_over()
        return

    snake.insert(0, new_head)

    # Food collision
    if new_head == (food_x, food_y):
        score_label.config(text=f"Score: {score + 1}")
        food_x = random.randint(0, (WIDTH - CELL) // CELL) * CELL
        food_y = random.randint(0, (HEIGHT - CELL) // CELL) * CELL
    else:
        snake.pop()

    draw_snake()
    draw_food()
    root.after(120, move_snake)

# ---------------- CONTROLS ----------------
def go_up(event):
    global direction
    if direction != "Down":
        direction = "Up"

def go_down(event):
    global direction
    if direction != "Up":
        direction = "Down"

def go_left(event):
    global direction
    if direction != "Right":
        direction = "Left"

def go_right(event):
    global direction
    if direction != "Left":
        direction = "Right"

# ---------------- GAME OVER ----------------
def game_over():
    canvas.create_text(
        WIDTH // 2, HEIGHT // 2,
        text="GAME OVER",
        fill="red",
        font=("Arial", 24)
    )

# ---------------- SCORE ----------------
score_label = tk.Label(
    root, text="Score: 0",
    font=("Arial", 14)
)
score_label.pack()

# ---------------- KEY BINDINGS ----------------
root.bind("<Up>", go_up)
root.bind("<Down>", go_down)
root.bind("<Left>", go_left)
root.bind("<Right>", go_right)

# ---------------- START ----------------
draw_snake()
draw_food()
move_snake()

root.mainloop()
