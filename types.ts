
export interface InfrastructureNetwork {
  digitalTransactionRails: {
    highFrequencyRails: { bandwidthGbps: number; latencyMs: number; throughputTxPerSec: number; securityProtocols: string[] }[];
    programmableValueRails: { ledgerCapacityGB: number; smartContractExecutionRateTxPerSec: number; immutabilityScore: number }[];
    identityVerificationRails: { queryResponseTimeMs: number; biometricIntegrationRatePercent: number; cryptographicStandard: string }[];
    totalBandwidthTbps: number;
    transactionDensityPerSqKm: number;
  };
  digitalAssetTokenization: {
    tokenIssuancePlatforms: { count: number; assetClassesSupported: string[]; dailyIssuanceVolumeUSD: number; complianceScore: number; smartContractAuditLogs: string[] }[];
    nftLedgers: { totalUniqueAssets: number; transactionVolumeUSD: number; royaltiesEnforcementRate: number; interoperabilityScore: number }[];
    stablecoinGateways: { count: number; supportedCurrencies: string[]; dailySettlementVolumeUSD: number }[];
    cbdcIntegrationPoints: { count: number; networkLatencyMs: number; participantCount: number }[];
    totalTokenizedValueUSD: number;
    auditabilityScore: number;
    regulatoryComplianceIndex: number;
  };
  dataCenterAndEnergyGrid: {
    computeCapacityPetaflops: number;
    storageCapacityPetaBytes: number;
    energyEfficiencyPUE: number;
    renewableEnergySupplyPercent: number;
    gridResilienceForDLTIndex: number;
    cyberSecurityPostureIndex: number;
    backupPowerAutonomyHours: number;
  };
  agenticNetworkConnectivity: {
    secureMessagingProtocols: string[];
    agentNodeDensityPerSqKm: number;
    realTimeDecisionLatencyMs: number;
    federatedLearningCapability: boolean;
    digitalIdentityVerificationRate: number;
  };
  financialInfrastructureMaturityIndex: number;
}

export interface EsgImpactProfile {
  totalEsgInvestmentAreaSqKm: number;
  percentageOfProjectArea: number;
  greenBondEligibility: { count: number; avgValueMillionsUSD: number; focusAreas: string[]; annualEnvironmentalImpactReductionScore: number }[];
  socialImpactZones: { count: number; totalBeneficiaries: number; financialInclusionScore: number; communityEngagementScore: number }[];
  governanceComplianceOverlays: { type: string; areaSqKm: number; enforcementScore: number; auditFrequency: string }[];
  sustainableFinanceIndex: number;
  carbonOffsetPotentialTonsPerYear: number;
  digitalEthicsComplianceScore: number;
  socialEquityInvestmentScore: number;
}

export interface RegulatoryZoningDetails {
  digitalAssetZones: {
    securityTokenZones: { areaSqKm: number; registeredIssuances: number; avgMarketCapUSD: number };
    utilityTokenZones: { areaSqKm: number; activeProjects: number; dailyTxVolumeUSD: number };
    nftDigitalArtZones: { areaSqKm: number; uniqueCreators: number; avgRoyaltyYieldPercent: number };
    mixedDigitalAssetZones: { areaSqKm: number; interoperabilityIndex: number };
    totalDigitalAssetZoneAreaSqKm: number;
    avgTokenMarketCapIndex: number;
  };
  financialInnovationHubs: {
    regulatorySandboxes: { areaSqKm: number; authorizedProjects: number; successRatePercent: number };
    fintechLabs: { areaSqKm: number; startupCount: number; patentFilingRate: number };
    totalInnovationAreaSqKm: number;
    innovationVelocityIndex: number;
  };
  complianceCorridors: {
    amlKycIntegration: { areaSqKm: number; transactionMonitoringEfficiencyPercent: number };
    dataPrivacyZones: { areaSqKm: number; dataEncryptionStandard: string; privacyAuditScore: number };
    crossBorderSettlementZones: { areaSqKm: number; transactionVolumeUSD: number };
    totalComplianceCorridorAreaSqKm: number;
  };
  agenticControlZones: {
    autonomousFinanceZones: { areaSqKm: number; activeAgents: number; riskControlScore: number };
    governanceEnforcementZones: { areaSqKm: number; policyAdherenceRate: number };
    totalAgenticControlAreaSqKm: number;
  };
  specialEconomicDigitalZones: { type: string; areaSqKm: number; purpose: string; regulatoryExemptions: string }[];
  digitalSovereigntyBoundaryKm: number;
  digitalLicenseIssuanceRate: number;
}

export interface DigitalIdentityProfile {
  totalRegisteredEntities: number;
  identityVerificationRatePerSec: number;
  kycLevelDistribution: { 'L1-basic': number; 'L2-standard': number; 'L3-enhanced': number; averageKycScore: number };
  transactionBehaviorAnalytics: { highValue: number; highFrequency: number; lowRisk: number; fraudDetectionRate: number };
  digitalAdoptionRatePercent: number;
  crossBorderTransactionIndex: number;
  agenticIdentityDiversityIndex: number;
  securityCredentialStrengthDistribution: { basic: number; MFA: number; biometric: number; quantumResistant: number };
  financialLiteracyScoreAvg: number;
}

export interface OperationalSustainabilityReport {
  dlcEnergyConsumptionPerTxKWh: number;
  totalAnnualEnergyConsumptionGWh: number;
  dataIntegrityViolationRate: number;
  transactionFinalityLatencyMs: number;
  renewableEnergySourceIntegrationPercent: number;
  systemUptimePercent: number;
  carbonNeutralityTargetYear: number;
  cyberResilienceRating: 'low' | 'medium' | 'high' | 'critical';
  algorithmicBiasMitigationIndex: number;
  dataSovereigntyComplianceIndex: number;
}

export interface FinancialMarketIndicators {
  digitalAssetLiquidityIndex: number;
  defiMarketCapGrowthPercent: number;
  stablecoinVelocityRate: number;
  regulatoryStabilityIndex: number;
  investorConfidenceIndex: number;
  financialProductInnovationRate: number;
  cybersecurityIncidentFrequencyPerYear: number;
  fraudDetectionEfficiencyPercent: number;
  systemicRiskFactor: number;
  crossBorderPaymentEfficiencyScore: number;
  financialInclusionProgressRate: number;
  programmableMoneyAdoptionIndex: number;
}

export interface OperationalAuditLandscape {
  auditTrailImmutabilityScore: number;
  realTimeMonitoringCoveragePercent: number;
  governancePolicyEnforcementRate: number;
  anomalyDetectionAccuracyPercent: number;
  messageIntegrityVerificationRate: number;
  concurrencyControlEfficiencyIndex: number;
  transactionReplayProtectionStatus: 'active' | 'passive' | 'none';
  idempotencyCoveragePercent: number;
}

export interface DigitalValueFlowAnalysis {
  peakTransactionVolumePerSec: number;
  realTimeSettlementRatePercent: number;
  crossChainInteroperabilityScore: 'low' | 'medium' | 'high' | 'excellent';
  averageTransactionLatencyMs: number;
  transactionThroughputCapacityTxPerSec: number;
  multiRailRoutingEfficiencyIndex: number;
  fraudPreventionBlockingRatePercent: number;
  predictiveRoutingAccuracyPercent: number;
}

export interface FinancialInfrastructureBlueprint {
  blueprintId: string;
  name: string;
  description: string;
  timestamp: string;
  version: number;
  architectureDiagramUrl: string;
  marketAdaptabilityScore: number;
  operationalEfficiencyScore: number;
  financialInclusionScore: number;
  overallSustainabilityScore: number;
  systemicResilienceScore: number;
  innovationPotentialScore: number;
  infrastructure: InfrastructureNetwork;
  esgImpact: EsgImpactProfile;
  regulatoryZoning: RegulatoryZoningDetails;
  digitalIdentity: DigitalIdentityProfile;
  operationalSustainability: OperationalSustainabilityReport;
  financialMarket: FinancialMarketIndicators;
  operationalAudit: OperationalAuditLandscape;
  digitalValueFlow: DigitalValueFlowAnalysis;
  dataLayers: {
    digitalAssetDistributionMap: string;
    programmableValueRailsMap: string;
    esgInvestmentOverlayMap: string;
    agentActivityHeatmap: string;
    digitalIdentityVerificationMap: string;
    financialInnovationZonesMap: string;
    cyberSecurityRiskMap: string;
    realTimeSettlementFlowMap: string;
    dlcEnergyConsumptionMap: string;
  };
  keyStrategicRecommendations: string[];
  criticalWarnings: string[];
  totalInvestmentEstimateMillionsUSD: number;
  deploymentPhases: {
    phaseName: string;
    durationMonths: number;
    budgetMillionsUSD: number;
    status: 'planned' | 'in-progress' | 'completed' | 'on-hold';
    milestones: { name: string; targetDate: string; completionPercent: number; dependencies: string[] }[];
  }[];
  riskAssessment: { type: 'cybersecurity' | 'financial' | 'regulatory' | 'operational'; severity: 'low' | 'medium' | 'high'; description: string; mitigationStrategy: string }[];
  stakeholderFeedbackSummary: { positive: string[]; negative: string[]; actionItems: string[] };
}

export interface DesignConstraints {
  targetMarketEntities: { min: number; max: number; targetDigitalAdoptionRatePercent: number };
  deploymentScopeSqKm: { min: number; max: number; preferredArchitectureTopology: 'centralized' | 'decentralized' | 'hybrid' };
  esgInvestmentTargetPercent: number;
  realTimeSettlementCoverageTargetPercent: number;
  carbonNeutralityTargetYear: number;
  financialInclusionTargetIndex: number;
  regulatoryPreferences: {
    digitalAssetClassificationPreference: 'security-token-focused' | 'utility-token-focused' | 'nft-focused' | 'mixed';
    innovationHubFocus: 'regulatory-sandbox' | 'fintech-lab' | 'defi-focused';
    complianceStrictness: 'low' | 'medium' | 'high';
  };
  dlcOptimizationFocus: 'energy-efficiency' | 'throughput' | 'security' | 'cost';
  socioEconomicFinancialGoals: {
    financialLiteracyImprovementPercent: number;
    microfinanceUptakeImprovementPercent: number;
    defiIntegrationEmphasis: 'low' | 'medium' | 'high';
    socialEquityInvestmentTargetIndex: number;
  };
  totalInvestmentCapMillionsUSD: number;
  deploymentTimelineMonths: number;
  criticalDeploymentZones: { name: string; type: 'digital-asset' | 'innovation-hub' | 'compliance' | 'agentic-control'; coordinates: string; investmentIntensity: 'low' | 'medium' | 'high' }[];
  cyberResilienceTargetRating: 'low' | 'medium' | 'high' | 'critical';
  dataSovereigntyComplianceLevel: 'local' | 'regional' | 'global';
  agenticAutomationTargetPercent: number;
  stakeholderEngagementStrategy: 'online-platform' | 'regulatory-workshops' | 'hybrid';
  disasterRecoveryStrategies: string[];
}

export interface ProjectMetadata {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  lastModified: string;
  currentBlueprintId: string | null;
  blueprintHistory: { blueprintId: string; timestamp: string; notes: string; constraintsUsed: DesignConstraints }[];
  collaborators: { userId: string; role: 'viewer' | 'editor' | 'auditor' }[];
  status: 'active' | 'archived' | 'on-hold' | 'pending-approval';
  tags: string[];
  financialApprovalStatus: 'approved' | 'pending' | 'rejected';
  riskRating: 'low' | 'medium' | 'high' | 'critical';
}

export interface UserProfile {
  userId: string;
  username: string;
  email: string;
  organization: string;
  preferences: {
    defaultCurrencyDisplay: 'USD' | 'EUR' | 'GBP';
    dashboardTheme: 'light' | 'dark';
    notificationSettings: { email: boolean; inApp: boolean; sms: boolean };
    dashboardLayout: 'compact' | 'expanded';
    dataPrivacyLevel: 'standard' | 'enhanced' | 'strict';
  };
  accessLevel: 'viewer' | 'editor' | 'admin' | 'super-admin' | 'compliance-officer' | 'security-auditor';
  kycLevel: 'L1' | 'L2' | 'L3';
  amlStatus: 'clean' | 'flagged' | 'under-review';
  lastLogin: string;
}
