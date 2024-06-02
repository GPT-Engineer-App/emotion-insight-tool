import { useState } from "react";
import { Container, VStack, Text, Textarea, Button, Box, Progress } from "@chakra-ui/react";
import { FaSmile, FaMeh, FaFrown } from "react-icons/fa";

const Index = () => {
  const [text, setText] = useState("");
  const [analysis, setAnalysis] = useState(null);

  const analyzeEmotion = () => {
    // Dummy analysis logic
    const positiveWords = ["happy", "joy", "excited", "love"];
    const negativeWords = ["sad", "angry", "upset", "hate"];
    const words = text.split(" ");
    let positiveCount = 0;
    let negativeCount = 0;

    words.forEach((word) => {
      if (positiveWords.includes(word.toLowerCase())) positiveCount++;
      if (negativeWords.includes(word.toLowerCase())) negativeCount++;
    });

    const totalWords = words.length;
    const positivePercentage = (positiveCount / totalWords) * 100;
    const negativePercentage = (negativeCount / totalWords) * 100;

    setAnalysis({
      positive: positivePercentage,
      negative: negativePercentage,
      neutral: 100 - positivePercentage - negativePercentage,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Emotional Analysis Tool</Text>
        <Textarea placeholder="Type your text here..." value={text} onChange={(e) => setText(e.target.value)} />
        <Button colorScheme="teal" onClick={analyzeEmotion}>
          Analyze Emotion
        </Button>
        {analysis && (
          <Box width="100%">
            <Text fontSize="lg">Analysis Results:</Text>
            <Box display="flex" alignItems="center">
              <FaSmile color="green" />
              <Progress value={analysis.positive} colorScheme="green" size="lg" width="100%" ml={2} />
              <Text ml={2}>{analysis.positive.toFixed(2)}%</Text>
            </Box>
            <Box display="flex" alignItems="center" mt={2}>
              <FaMeh color="gray" />
              <Progress value={analysis.neutral} colorScheme="gray" size="lg" width="100%" ml={2} />
              <Text ml={2}>{analysis.neutral.toFixed(2)}%</Text>
            </Box>
            <Box display="flex" alignItems="center" mt={2}>
              <FaFrown color="red" />
              <Progress value={analysis.negative} colorScheme="red" size="lg" width="100%" ml={2} />
              <Text ml={2}>{analysis.negative.toFixed(2)}%</Text>
            </Box>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
