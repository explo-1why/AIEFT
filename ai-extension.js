(function (Scratch) {
    'use strict';

    class AIExtension {
        getInfo() {
            return {
                id: 'airesponse',
                name: 'AI Response',
                blocks: [
                    {
                        opcode: 'generateResponse',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'Generate response for [TEXT]',
                        arguments: {
                            TEXT: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "Hello"
                            }
                        }
                    }
                ]
            };
        }

        generateResponse(args) {
            const responses = {
                "hello": "Hi there!",
                "how are you": "I'm just code, but I'm good!",
                "what's your name": "I'm a Scratch AI extension."
            };
            let input = args.TEXT.toLowerCase();
            return responses[input] || "I don't know what to say.";
        }
    }

    Scratch.extensions.register(new AIExtension());
})(Scratch);
