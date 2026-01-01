
import { GoogleGenAI, Type } from "@google/genai";
import { FinancialInfrastructureBlueprint } from "../types";

// Always initialize the client inside the function to ensure the latest API key is used
// as per @google/genai guidelines.

/**
 * Analyzes the infrastructure blueprint and generates a strategic summary.
 */
export const getBlueprintStrategicSummary = async (blueprint: FinancialInfrastructureBlueprint): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `
        Analyze this financial infrastructure blueprint and provide a concise, high-level executive strategic summary (max 300 words).
        Highlight its greatest strengths, its primary systemic risk, and one transformative opportunity it presents for the digital economy.
        
        Blueprint Data:
        - Name: ${blueprint.name}
        - Description: ${blueprint.description}
        - Scores: Adaptability(${blueprint.marketAdaptabilityScore}), Efficiency(${blueprint.operationalEfficiencyScore}), Resilience(${blueprint.systemicResilienceScore})
        - Regulatory Focus: ${blueprint.regulatoryZoning.digitalAssetZones.totalDigitalAssetZoneAreaSqKm} sqkm area.
        - Energy: ${blueprint.operationalSustainability.dlcEnergyConsumptionPerTxKWh} kWh/tx.
        - Settlement: ${blueprint.digitalValueFlow.realTimeSettlementRatePercent}% real-time rate.
      `,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });

    return response.text || "Unable to generate summary at this time.";
  } catch (error) {
    console.error("Gemini analysis error:", error);
    return "The AI analyst is currently offline. Please review metrics manually.";
  }
};

export interface SimulationResult {
  executiveSummary: string;
  riskScore: number;
  mitigationSteps: string[];
  projectedROI: string;
}

/**
 * Executes a strategic simulation scenario using the Gemini 3 Pro model.
 */
export const runStrategicSimulation = async (
  blueprint: FinancialInfrastructureBlueprint, 
  type: string
): Promise<SimulationResult> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: `
        Run a high-fidelity '${type}' simulation on the following financial infrastructure blueprint.
        
        System Parameters:
        - Resilience Score: ${blueprint.systemicResilienceScore}
        - Cyber Rating: ${blueprint.operationalSustainability.cyberResilienceRating}
        - Fraud Detection: ${blueprint.financialMarket.fraudDetectionEfficiencyPercent}%
        - Settlement Latency: ${blueprint.digitalValueFlow.averageTransactionLatencyMs}ms
        - Multi-rail Efficiency: ${blueprint.digitalValueFlow.multiRailRoutingEfficiencyIndex}
        
        Provide the result in JSON format including:
        1. executiveSummary (Detailed analysis of how the system handles this scenario)
        2. riskScore (0-100)
        3. mitigationSteps (Array of 3 strings)
        4. projectedROI (Percentage string)
      `,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            executiveSummary: { type: Type.STRING },
            riskScore: { type: Type.NUMBER },
            mitigationSteps: { type: Type.ARRAY, items: { type: Type.STRING } },
            projectedROI: { type: Type.STRING }
          },
          required: ["executiveSummary", "riskScore", "mitigationSteps", "projectedROI"]
        }
      }
    });

    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("Simulation error:", error);
    throw error;
  }
};
