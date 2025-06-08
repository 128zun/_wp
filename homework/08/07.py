def dict_to_string(d):
    pairs = [f"{key}:{value}" for key, value in d.items()]
    return ", ".join(pairs)
print(dict_to_string({'a': 1, 'b': 2}))
print(dict_to_string({'x': 10, 'y': 20, 'z': 30}))
print(dict_to_string({}))