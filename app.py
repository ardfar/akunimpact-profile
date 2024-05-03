import os
import glob

# Path to the directory containing the images
directory = r'C:\Users\Daniel Maheswara\Desktop\akunimpact-profile-dev\assets\images\games\hsr\light-cones'

# Get a list of all image files in the directory
image_files = glob.glob(os.path.join(directory, '*.webp'))

# Create a dictionary to store the file names and character names
image_dict = {}

# Populate the dictionary with file names and corresponding character names
for image_file in image_files:
    file_name = os.path.basename(image_file)
    character_name = file_name.split('.')[0].replace('-', ' ').title()
    image_dict[file_name] = character_name

# Print the dictionary
for file_name, character_name in image_dict.items():
    print(f"'{file_name}': '{character_name}'")
