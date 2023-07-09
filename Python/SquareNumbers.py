# Best Solutions
# 1)
# import math
# def is_square(n):
#     return n > -1 and math.sqrt(n) % 1 == 0;
# 2)
# def is_square(n):
#     if n>=0:
#         if int(n**.5)**2 == n:
#             return True
#     return False

# My Solution
import math


def is_square(n):
    if n >= 0 and isinstance(n, int):
        SqrtResult = math.sqrt(n)
        if (SqrtResult ** 2) == n:
            return True
        else:
            return False
    else:
        return False
