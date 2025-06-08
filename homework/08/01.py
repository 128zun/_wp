def find_max(numbers):
    if not numbers:
        return None
    max_num = numbers[0]
    for num in numbers[1:]:
        if num > max_num:
            max_num = num
    return max_num

print(find_max([3, 7, 2, 9, 5]))
print(find_max([-10, -3, -20])) 
print(find_max([]))  