def grade(score):
    if 90 <= score <= 100:
        return 'A'
    elif 80 <= score <= 89:
        return 'B'
    elif 70 <= score <= 79:
        return 'C'
    elif 60 <= score <= 69:
        return 'D'
    elif 0 <= score <= 59:
        return 'F'
    else:
        return 'Invalid score'
    
print(grade(95))
print(grade(82))
print(grade(70))
print(grade(60))
print(grade(50))
print(grade(110))