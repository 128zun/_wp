def most_common(nums):
    count_dict = {}

    # 記錄每個數字出現的次數
    for num in nums:
        if num in count_dict:
            count_dict[num] += 1
        else:
            count_dict[num] = 1

    # 找出出現次數最多的數字
    max_count = 0
    most_common_num = None
    for num, count in count_dict.items():
        if count > max_count:
            max_count = count
            most_common_num = num

    return most_common_num

nums = [1, 3, 2, 3, 4, 3, 2, 1]
print(most_common(nums))  # 輸出: 3