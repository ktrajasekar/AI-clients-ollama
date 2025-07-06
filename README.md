# React + Vite

https://chatgpt.com/share/686a57ec-9a4c-8004-a371-0d3622bc8686

### Install Ollama in linux

```sh
curl -fsSL https://ollama.com/install.sh | sh
```

### Check installed version

```sh
ollama --version
```

### Download and install

```sh
ollama run llama2
```

### Run Ollama with LLAMA2

```sh
ollama run llama2
```

### Check the Rest API

```
http://localhost:11434
```

### To run Ollama in background:

```sh
ollama serve
```

### To remove a model:

```sh
ollama rm llama2
```

CURL

```curl
curl http://localhost:11434/api/generate -d '{
  "model": "llama2",
  "prompt": "What is the capital of France?"
}'
```
# AI-clients-ollama
