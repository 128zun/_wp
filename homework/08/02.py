def average(nums):
    if not nums:
        return None  # 或者 raise ValueError("List cannot be empty")
    avg = sum(nums) / len(nums)
    return round(avg, 1)

print(average([10, 20, 30]))     # 輸出 20.0
print(average([1, 2, 3, 4]))     # 輸出 2.5
print(average([]))     