import { useState, useRef, useEffect } from "react";
import { Container, VStack, Text, Button, Box, Textarea } from "@chakra-ui/react";

const VideoAnalysis = () => {
  const [analysis, setAnalysis] = useState(null);
  const videoRef = useRef(null);
  const [emotionText, setEmotionText] = useState("");

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => console.error("Error accessing webcam: ", err));
  }, []);

  const analyzeEmotion = () => {
    // Simulate a more detailed analysis
    const positive = Math.floor(Math.random() * 50) + 25;
    const negative = Math.floor(Math.random() * 30) + 10;
    const neutral = 100 - positive - negative;

    setAnalysis({
      positive,
      negative,
      neutral,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Video Emotional Analysis Tool</Text>
        <Button colorScheme="teal" onClick={() => videoRef.current.play()}>
          Enable Video
        </Button>
        <Box as="video" ref={videoRef} autoPlay width="100%" height="auto" mt={4} />
        <Button colorScheme="teal" onClick={analyzeEmotion}>
          Analyze Emotion
        </Button>
        {analysis && (
          <Box width="100%">
            <Text fontSize="lg">Analysis Results:</Text>
            <Box display="flex" alignItems="center">
              <Text color="green" ml={2}>
                {analysis.positive}% Positive
              </Text>
            </Box>
            <Box display="flex" alignItems="center" mt={2}>
              <Text color="gray" ml={2}>
                {analysis.neutral}% Neutral
              </Text>
            </Box>
            <Box display="flex" alignItems="center" mt={2}>
              <Text color="red" ml={2}>
                {analysis.negative}% Negative
              </Text>
            </Box>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default VideoAnalysis;
