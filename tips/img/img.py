import subprocess
import os
import json

def test():
    direct = os.listdir("./")
    for dire in direct:
        print(dire)

# Executa o comando
def executeCommand(command, input_file, output_file):
    try:
        subprocess.run(command, check=True)
        print(f"Processado: {input_file} -> {output_file}")
    except subprocess.CalledProcessError as e:
        print(f"Erro ao processar {input_file}: {e}")

def cleanFile(path):
    try:
        with open(path, "w") as archive:
            archive.write("")
    except:
        print("something went wrong babe")

def read_txt():
    try:
        with open("./img.txt", "r") as file:
            files = [line.strip() for line in file.readlines()]
        return files
    except FileNotFoundError:
        print(f"O arquivo {"./img.txt"} não foi encontrado.")
        return []

def write_txt(content, mode):
    try:
        with open("./img.txt", mode) as archive:
            archive.write(content)
    except:
        print("something went wrong babe")

def convertPhoto(input_file, ext):
    ext = ext.replace(".", "")
    name, ext2 = os.path.splitext(input_file)
    output_file = f"{name}.{ext}"
    command = ["ffmpeg", "-i", input_file, output_file]
    executeCommand(command, input_file, output_file)

def convertPhotos(files, ext):
    for file in files:
        convertPhoto(file, ext)

def convertEntireFolder(path, ext):
    for file_name in os.listdir(path):
        convertPhoto(file_name, ext)

def smallPhoto(input_file):
    name, ext = os.path.splitext(input_file)
    output_file = f"{name}-small{ext}"
    command = ["ffmpeg", "-i", input_file, "-vf", "scale=20:-1", output_file]
    executeCommand(command, input_file, output_file)

def smallPhotos(files):
    for file in files:
        smallPhoto(file)

def scaleImage(input_file, scale):
    output_file = f"./x/{input_file}"
    command = ["ffmpeg", "-i", input_file, "-vf", f"scale={scale}:-1", output_file]
    executeCommand(command, input_file, output_file)

def getImageDimensions(image_path):
    try:
        command = [
            "ffprobe",
            "-v", "error",
            "-select_streams", "v:0",
            "-show_entries", "stream=width,height",
            "-of", "json",
            image_path
        ]
        
        result = subprocess.run(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        output = result.stdout
        
        data = json.loads(output)

        width = data["streams"][0]["width"]
        height = data["streams"][0]["height"]

        return width, height
    except (IndexError, KeyError, json.JSONDecodeError):
        print(f"Erro ao obter dimensões da imagem: {image_path}")
        return None, None

def getDirectoryImageDimensions(directory):
    image_dimensions = {}
    for file_name in os.listdir(directory):
        file_path = os.path.join(directory, file_name)
        if os.path.isfile(file_path) and file_name.lower().endswith(('.jpg', '.jpeg', '.png', '.bmp', '.gif')):
            width, height = getImageDimensions(file_path)
            if width and height:
                image_dimensions[file_name] = (width, height)
                print(f"Imagem: {file_name} -> Dimensões: {width}x{height}")
    return image_dimensions

def read_json():
    try:
        with open("./img.txt", "r") as file:
            images_data = json.load(file)
            return images_data
    except FileNotFoundError:
        print("file not found")

# directory_path = "./"
# dimensions = getDirectoryImageDimensions(directory_path)

# cleanFile("./img.txt")
# for image, dim in dimensions.items():
#     write_txt(f"Image: {image} -> Dimensions: {dim}\n", "a")

# images_data = read_json()
# for image in images_data:
#     scaleImage(image['name'], image['size'])

smallPhotos(read_txt())

'''
for file in *.png; do
ffmpeg -i "$file" -q:v 10 "${file%.png}.jpg"
done'''