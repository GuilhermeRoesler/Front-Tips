import subprocess
import os

# Executa o comando
def executeCommand(command, input_file, output_file):
    try:
        subprocess.run(command, check=True)
        print(f"Processado: {input_file} -> {output_file}")
    except subprocess.CalledProcessError as e:
        print(f"Erro ao processar {input_file}: {e}")

def read_txt():
    try:
        with open("./img.txt", "r") as file:
            files = [line.strip() for line in file.readlines()]
        return files
    except FileNotFoundError:
        print(f"O arquivo {"./img.txt"} não foi encontrado.")
        return []

def convertPhoto(input_file, ext):
    ext = ext.replace(".", "")
    name, ext2 = os.path.splitext(input_file)
    output_file = f"{name}.{ext}"
    command = ["ffmpeg", "-i", input_file, output_file]
    executeCommand(command, input_file, output_file)

def smallPhoto(input_file):
    name, ext = os.path.splitext(input_file)
    output_file = f"{name}-small{ext}"
    command = ["ffmpeg", "-i", input_file, "-vf", "scale=20:-1", output_file]
    executeCommand(command, input_file, output_file)

def smallPhotos(files):
    for file in files:
        smallPhoto(file)

files = read_txt()

convertPhoto("science_planet.jpeg", "jpg")