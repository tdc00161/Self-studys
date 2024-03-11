# 변수 선언
name = "jin"
age = 13
print(name, age)

# 함수
# def 함수명():
#   print("내용")

def say_hello():
    print("Hello, World")

# 연습문제

# 1. 세금계산
def tax_calc(money):
    return money * 0.35

def pay_tax(tax):
    print("thank you for paying", tax)

result = tax_calc(150000000)
pay_tax(result)

# 2. 계산기(값의 기본 값을 설정해두면, 호출시 빈 값으로 호출해도 기본값으로 출력)
def plus(a=0, b=0):
   print(a + b)

def minus(a=0, b=0):
   print(a - b)

def multi(a=0, b=0):
   print(a * b)

def division(a=0, b=1):
   print(a / b)

def power(a=0, b=1):
   print(a ** b)

plus()
minus()
multi()
division()
power()


# 3. 음료제조
def make_juice(fruit):
  return f"{fruit}+🥤"

def add_ice(juice):
  return f"{juice}+🧊"

def add_sugar(iced_juice):
  return f"{iced_juice}+🍬"

juice = make_juice("🍎")
cold_juice = add_ice(juice)
perfect_juice = add_sugar(cold_juice)

print(perfect_juice)


# f"" 는 긴 문장에 변수담아 사용하고자 할 때 유용함.

# """주석하고싶은 내용""" 따옴표내에 작성된 값을 무시(주석처리)
# 한 줄을 주석처리할 때는 # 를 사용

"""안녕하세요"""

# while 반복문

# distance 가 20보다 작을때까지 실행
distance = 0

while distance < 20:
   print("I'm running:", distance, "km")
   distance += 1

# 배열: 안에 인덱스에 대해 변경 가능

list = [1,2,3,4]

# 튜플: 불변성으로 몇 가지 외앤 변경 불가능

tuple = (1,2,3,4)

# 딕셔너리: 키와 값, 변경 가능

player = {
   'name': 'jin',
   'age': 12,
   'alive': True
}

"""
숫자 목록, TO-do 목록, 목록 관련은 list or tuple,
많은 속성들을 가지고 있는 데이터 만들 때는 딕셔너리
"""

print(player['alive'])

# for 문

websites = ("google.com",
            "airbnb.com",
            "twitter.com",
            "facebook.com"
          )

for each in websites:
   print("hello")
