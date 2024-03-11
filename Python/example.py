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


