import os
import glob

# Path to the directory containing the images
directory = r'C:\Users\Daniel Maheswara\Desktop\akunimpact-profile-dev\assets\images\games\genshin\weapons'

# Iterate over each folder
for folder in os.listdir(directory):
    folder_path = os.path.join(directory, folder)
    
    # Check if the item in the directory is a folder
    if os.path.isdir(folder_path):
        # Use glob to find all .webp files in the folder
        image_files = glob.glob(os.path.join(folder_path, '*.webp'))
        
        # Print the names of the image files
        for image_file in image_files:
            print(os.path.basename(image_file))
