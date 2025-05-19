# TechJoint Transcription

This repository contains a simple Python script for transcribing large audio files using the OpenAI API. Audio files are split into five‑minute chunks and each chunk is transcribed separately. The final result is saved or printed as a single combined text.

## Getting Started in GitHub Codespaces

1. **Create a Codespace** – Open this repository in GitHub and choose **Code → Codespaces → Create codespace on main**.
2. The prebuilt container installs dependencies automatically via the `postCreateCommand` in `.devcontainer/devcontainer.json`.
3. Add a `.env` file at the project root containing your OpenAI API key:

   ```bash
   echo "OPENAI_API_KEY=YOUR_KEY_HERE" > .env
   ```

   The `.env` file is listed in `.gitignore` so your key remains private.
4. From the terminal, run the transcription script:

   ```bash
   python transcribe.py path/to/audio.mp3 -o output.txt
   ```

   Replace `path/to/audio.mp3` with your file. The optional `-o` flag writes the result to `output.txt`.

## Security Notes

- Keep your API key in the `.env` file and **never** commit it to version control.
- Audio chunks are exported temporarily during transcription and automatically deleted when finished.
- Review OpenAI's data usage policies to ensure your content complies with their terms.

## Requirements

- Python 3.10+
- `ffmpeg` available in the environment (required by `pydub`)

All required Python packages are listed in `requirements.txt`.
