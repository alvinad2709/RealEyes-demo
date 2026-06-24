// Shared TypeScript types for DeepGuard extension

export interface AnalysisResult {
  success: boolean;
  type: "image";
  label: "FAKE" | "REAL";
  confidence: number; // 0–100
  scores: {
    FAKE: number;
    REAL: number;
  };
  details: {
    risk_level: string;
    analysis_points: string[];
    model: string;
  };
}

export type MessageType =
  | "START_REGION_SELECT"
  | "CAPTURE_REGION"
  | "ANALYZE_IMAGE_BASE64"
  | "ANALYSIS_RESULT"
  | "ANALYSIS_ERROR";

export interface ChromeMessage {
  type: MessageType;
  payload?: unknown;
}
