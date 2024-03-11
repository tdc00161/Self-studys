# 숫자 맞추기 게임

from random import randint # 라이브러리 선언시 작성

print("Welcome to the game!")
pc_choice = randint(1, 50) # I imported this
playing = True # 기본값 설정

while playing: # 경기 시작
    user_choice = int(input("chooseNumber(1-100):"))
    if user_choice == pc_choice: # 유저와 피씨 값이 동일
        print("You won!")
        playing = False # 경기 종료
    elif user_choice > pc_choice: # 유저 값 > 피씨 값
        print("Lower")
    elif user_choice < pc_choice: # 유저 값 > 피씨 값
        print("Higher!")




