import os

directory = "assets/images/games/hsr/characters/"

# Get all file names in the directory
file_names = os.listdir(directory)

print("File names in the directory:")
for file_name in file_names:
    
    print(file_name)
