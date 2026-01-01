
import { 
  ProjectMetadata, 
  DesignConstraints, 
  FinancialInfrastructureBlueprint, 
  UserProfile, 
  InfrastructureNetwork, 
  EsgImpactProfile, 
  RegulatoryZoningDetails, 
  DigitalIdentityProfile, 
  OperationalSustainabilityReport, 
  FinancialMarketIndicators, 
  OperationalAuditLandscape, 
  DigitalValueFlowAnalysis 
} from '../types';

export class UrbanSymphonyApiService {
  private static instance: UrbanSymphonyApiService;
  private projects: ProjectMetadata[] = [];
  private blueprints: { [blueprintId: string]: FinancialInfrastructureBlueprint } = {};
  private users: { [userId: string]: UserProfile } = {};
  private nextBlueprintId = 1;
  private nextProjectId = 1;

  private constructor() {
    this.users['user-001'] = {
      userId: 'user-001', username: 'Alexandria Veldt', email: 'alexandria.veldt@fintech.corp', organization: 'Quantum Financial Group',
      preferences: { defaultCurrencyDisplay: 'USD', dashboardTheme: 'dark', notificationSettings: { email: true, inApp: true, sms: false }, dashboardLayout: 'expanded', dataPrivacyLevel: 'enhanced' },
      accessLevel: 'admin', kycLevel: 'L3', amlStatus: 'clean', lastLogin: new Date().toISOString()
    };
    this.createProject("NextGen Digital Exchange", {
      targetMarketEntities: { min: 500000, max: 1000000, targetDigitalAdoptionRatePercent: 75 },
      deploymentScopeSqKm: { min: 100, max: 200, preferredArchitectureTopology: 'decentralized' },
      esgInvestmentTargetPercent: 30,
      realTimeSettlementCoverageTargetPercent: 95,
      carbonNeutralityTargetYear: 2030,
      financialInclusionTargetIndex: 0.85,
      regulatoryPreferences: { digitalAssetClassificationPreference: 'security-token-focused', innovationHubFocus: 'regulatory-sandbox', complianceStrictness: 'high' },
      dlcOptimizationFocus: 'security',
      socioEconomicFinancialGoals: { financialLiteracyImprovementPercent: 10, microfinanceUptakeImprovementPercent: 15, defiIntegrationEmphasis: 'high', socialEquityInvestmentTargetIndex: 0.9 },
      totalInvestmentCapMillionsUSD: 15000,
      deploymentTimelineMonths: 240,
      criticalDeploymentZones: [
        { name: 'Global Settlement Core', type: 'digital-asset', coordinates: 'lat:34.05,lon:-118.25', investmentIntensity: 'high' },
        { name: 'Regulatory Sandbox East', type: 'innovation-hub', coordinates: 'lat:34.06,lon:-118.28', investmentIntensity: 'medium' }
      ],
      cyberResilienceTargetRating: 'critical',
      dataSovereigntyComplianceLevel: 'regional',
      agenticAutomationTargetPercent: 70,
      stakeholderEngagementStrategy: 'hybrid',
      disasterRecoveryStrategies: ['multi-region failover', 'immutable audit logs']
    }, 'user-001');
  }

  public static getInstance(): UrbanSymphonyApiService {
    if (!UrbanSymphonyApiService.instance) {
      UrbanSymphonyApiService.instance = new UrbanSymphonyApiService();
    }
    return UrbanSymphonyApiService.instance;
  }

  private generateRandomScore(min: number = 0.65, max: number = 0.98): number {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
  }

  private generateInfrastructure(constraints: DesignConstraints): InfrastructureNetwork {
    const settlementInfluence = constraints.realTimeSettlementCoverageTargetPercent / 100;
    const computeDensity = (constraints.deploymentScopeSqKm.min + constraints.deploymentScopeSqKm.max) / 200 * (1 + settlementInfluence);

    return {
      digitalTransactionRails: {
        highFrequencyRails: [{ bandwidthGbps: Math.floor(computeDensity * 100) + 500, latencyMs: parseFloat((Math.random() * 0.5 + 0.1).toFixed(2)), throughputTxPerSec: Math.floor(computeDensity * 10000) + 50000, securityProtocols: ['TLS1.3', 'Post-Quantum Crypto'] }],
        programmableValueRails: [{ ledgerCapacityGB: Math.floor(computeDensity * 200) + 1000, smartContractExecutionRateTxPerSec: Math.floor(computeDensity * 500) + 2000, immutabilityScore: this.generateRandomScore(0.9, 0.99) }],
        identityVerificationRails: [{ queryResponseTimeMs: parseFloat((Math.random() * 1 + 5).toFixed(1)), biometricIntegrationRatePercent: Math.min(95, settlementInfluence * 100 * 0.8), cryptographicStandard: 'FIPS 140-3' }],
        totalBandwidthTbps: parseFloat((computeDensity * 0.5 + 1).toFixed(2)),
        transactionDensityPerSqKm: parseFloat((computeDensity * 5).toFixed(2)),
      },
      digitalAssetTokenization: {
        tokenIssuancePlatforms: [{ count: Math.floor(settlementInfluence * 5) + 2, assetClassesSupported: ['Equities', 'Real Estate', 'Commodities'], dailyIssuanceVolumeUSD: Math.floor(settlementInfluence * 100000000) + 50000000, complianceScore: this.generateRandomScore(0.85, 0.99), smartContractAuditLogs: ['audit_log_2023_Q4.json'] }],
        nftLedgers: [{ totalUniqueAssets: Math.floor(settlementInfluence * 50000) + 10000, transactionVolumeUSD: Math.floor(settlementInfluence * 1000000) + 200000, royaltiesEnforcementRate: this.generateRandomScore(0.8, 0.95), interoperabilityScore: this.generateRandomScore(0.6, 0.9) }],
        stablecoinGateways: [{ count: Math.floor(settlementInfluence * 3) + 1, supportedCurrencies: ['USD', 'EUR', 'JPY'], dailySettlementVolumeUSD: Math.floor(settlementInfluence * 500000000) + 100000000 }],
        cbdcIntegrationPoints: [{ count: Math.floor(settlementInfluence * 2) + 1, networkLatencyMs: parseFloat((Math.random() * 0.2 + 0.05).toFixed(2)), participantCount: Math.floor(settlementInfluence * 100) + 50 }],
        totalTokenizedValueUSD: Math.floor(settlementInfluence * 1000000000) + 500000000,
        auditabilityScore: this.generateRandomScore(0.8, 0.95),
        regulatoryComplianceIndex: this.generateRandomScore(0.8, 0.9),
      },
      dataCenterAndEnergyGrid: {
        computeCapacityPetaflops: Math.floor(constraints.targetMarketEntities.max / 100000 * 5) + 100,
        storageCapacityPetaBytes: Math.floor(constraints.targetMarketEntities.max / 100000 * 10) + 200,
        energyEfficiencyPUE: 1.1,
        renewableEnergySupplyPercent: 85,
        gridResilienceForDLTIndex: this.generateRandomScore(0.9, 0.99),
        cyberSecurityPostureIndex: this.generateRandomScore(0.85, 0.99),
        backupPowerAutonomyHours: 48,
      },
      agenticNetworkConnectivity: {
        secureMessagingProtocols: ['Noise', 'MLS'],
        agentNodeDensityPerSqKm: 12.5,
        realTimeDecisionLatencyMs: 15,
        federatedLearningCapability: true,
        digitalIdentityVerificationRate: 0.98,
      },
      financialInfrastructureMaturityIndex: this.generateRandomScore(0.7, 0.95),
    };
  }

  private generateMockBlueprint(constraints: DesignConstraints, projectName: string = "Blueprint"): FinancialInfrastructureBlueprint {
    const blueprintId = `BPRINT-${this.nextBlueprintId++}`;
    const architectureDiagrams = [
      "https://picsum.photos/seed/tech1/1200/800",
      "https://picsum.photos/seed/tech2/1200/800",
      "https://picsum.photos/seed/tech3/1200/800"
    ];

    const infrastructure = this.generateInfrastructure(constraints);

    return {
      blueprintId,
      name: `${projectName} v${this.nextBlueprintId}`,
      description: `Comprehensive financial architecture optimized for ${constraints.regulatoryPreferences.digitalAssetClassificationPreference}.`,
      timestamp: new Date().toISOString(),
      version: 1,
      architectureDiagramUrl: architectureDiagrams[Math.floor(Math.random() * architectureDiagrams.length)],
      marketAdaptabilityScore: this.generateRandomScore(),
      operationalEfficiencyScore: this.generateRandomScore(),
      financialInclusionScore: this.generateRandomScore(),
      overallSustainabilityScore: this.generateRandomScore(),
      systemicResilienceScore: this.generateRandomScore(),
      innovationPotentialScore: this.generateRandomScore(),
      infrastructure,
      esgImpact: {
        totalEsgInvestmentAreaSqKm: 50,
        percentageOfProjectArea: constraints.esgInvestmentTargetPercent,
        greenBondEligibility: [],
        socialImpactZones: [],
        governanceComplianceOverlays: [],
        sustainableFinanceIndex: 0.85,
        carbonOffsetPotentialTonsPerYear: 5000,
        digitalEthicsComplianceScore: 0.9,
        socialEquityInvestmentScore: 0.8,
      },
      regulatoryZoning: {
        digitalAssetZones: {
          securityTokenZones: { areaSqKm: 20, registeredIssuances: 100, avgMarketCapUSD: 500000000 },
          utilityTokenZones: { areaSqKm: 30, activeProjects: 450, dailyTxVolumeUSD: 12000000 },
          nftDigitalArtZones: { areaSqKm: 10, uniqueCreators: 200, avgRoyaltyYieldPercent: 5.5 },
          mixedDigitalAssetZones: { areaSqKm: 5, interoperabilityIndex: 0.75 },
          totalDigitalAssetZoneAreaSqKm: 65,
          avgTokenMarketCapIndex: 0.82,
        },
        financialInnovationHubs: {
          regulatorySandboxes: { areaSqKm: 5, authorizedProjects: 12, successRatePercent: 82 },
          fintechLabs: { areaSqKm: 10, startupCount: 45, patentFilingRate: 0.4 },
          totalInnovationAreaSqKm: 15,
          innovationVelocityIndex: 0.78,
        },
        complianceCorridors: {
          amlKycIntegration: { areaSqKm: 20, transactionMonitoringEfficiencyPercent: 0.98 },
          dataPrivacyZones: { areaSqKm: 15, dataEncryptionStandard: 'AES-256', privacyAuditScore: 0.95 },
          crossBorderSettlementZones: { areaSqKm: 10, transactionVolumeUSD: 50000000 },
          totalComplianceCorridorAreaSqKm: 45,
        },
        agenticControlZones: {
          autonomousFinanceZones: { areaSqKm: 10, activeAgents: 1500, riskControlScore: 0.92 },
          governanceEnforcementZones: { areaSqKm: 5, policyAdherenceRate: 0.99 },
          totalAgenticControlAreaSqKm: 15,
        },
        specialEconomicDigitalZones: [],
        digitalSovereigntyBoundaryKm: 250,
        digitalLicenseIssuanceRate: 45,
      },
      digitalIdentity: {
        totalRegisteredEntities: 1000000,
        identityVerificationRatePerSec: 150,
        kycLevelDistribution: { 'L1-basic': 40, 'L2-standard': 40, 'L3-enhanced': 20, averageKycScore: 0.88 },
        transactionBehaviorAnalytics: { highValue: 5, highFrequency: 15, lowRisk: 75, fraudDetectionRate: 0.99 },
        digitalAdoptionRatePercent: constraints.targetMarketEntities.targetDigitalAdoptionRatePercent,
        crossBorderTransactionIndex: 0.45,
        agenticIdentityDiversityIndex: 0.65,
        securityCredentialStrengthDistribution: { basic: 10, MFA: 60, biometric: 25, quantumResistant: 5 },
        financialLiteracyScoreAvg: 72,
      },
      operationalSustainability: {
        dlcEnergyConsumptionPerTxKWh: 0.002,
        totalAnnualEnergyConsumptionGWh: 15,
        dataIntegrityViolationRate: 0.0001,
        transactionFinalityLatencyMs: 150,
        renewableEnergySourceIntegrationPercent: 85,
        systemUptimePercent: 0.9999,
        carbonNeutralityTargetYear: 2030,
        cyberResilienceRating: 'critical',
        algorithmicBiasMitigationIndex: 0.92,
        dataSovereigntyComplianceIndex: 0.95,
      },
      financialMarket: {
        digitalAssetLiquidityIndex: 0.82,
        defiMarketCapGrowthPercent: 12.5,
        stablecoinVelocityRate: 4.2,
        regulatoryStabilityIndex: 0.88,
        investorConfidenceIndex: 0.9,
        financialProductInnovationRate: 0.35,
        cybersecurityIncidentFrequencyPerYear: 2,
        fraudDetectionEfficiencyPercent: 99.5,
        systemicRiskFactor: 0.08,
        crossBorderPaymentEfficiencyScore: 0.94,
        financialInclusionProgressRate: 8.5,
        programmableMoneyAdoptionIndex: 0.72,
      },
      operationalAudit: {
        auditTrailImmutabilityScore: 0.99,
        realTimeMonitoringCoveragePercent: 99.9,
        governancePolicyEnforcementRate: 98,
        anomalyDetectionAccuracyPercent: 97,
        messageIntegrityVerificationRate: 99.9,
        concurrencyControlEfficiencyIndex: 0.92,
        transactionReplayProtectionStatus: 'active',
        idempotencyCoveragePercent: 95,
      },
      digitalValueFlow: {
        peakTransactionVolumePerSec: 25000,
        realTimeSettlementRatePercent: 98.5,
        crossChainInteroperabilityScore: 'excellent',
        averageTransactionLatencyMs: 45,
        transactionThroughputCapacityTxPerSec: 100000,
        multiRailRoutingEfficiencyIndex: 0.96,
        fraudPreventionBlockingRatePercent: 99.8,
        predictiveRoutingAccuracyPercent: 94,
      },
      dataLayers: {
        digitalAssetDistributionMap: "https://picsum.photos/seed/map1/1200/800",
        programmableValueRailsMap: "https://picsum.photos/seed/map2/1200/800",
        esgInvestmentOverlayMap: "https://picsum.photos/seed/map3/1200/800",
        agentActivityHeatmap: "https://picsum.photos/seed/map4/1200/800",
        digitalIdentityVerificationMap: "https://picsum.photos/seed/map5/1200/800",
        financialInnovationZonesMap: "https://picsum.photos/seed/map6/1200/800",
        cyberSecurityRiskMap: "https://picsum.photos/seed/map7/1200/800",
        realTimeSettlementFlowMap: "https://picsum.photos/seed/map8/1200/800",
        dlcEnergyConsumptionMap: "https://picsum.photos/seed/map9/1200/800",
      },
      keyStrategicRecommendations: [
        "Strengthen cross-border settlement protocols using post-quantum cryptography.",
        "Expand regulatory sandbox capacity for DeFi-focused startups.",
        "Accelerate renewable energy transition for regional data centers."
      ],
      criticalWarnings: [],
      totalInvestmentEstimateMillionsUSD: 12500,
      deploymentPhases: [
        { phaseName: "Alpha Architecture", durationMonths: 12, budgetMillionsUSD: 1200, status: 'completed', milestones: [] },
        { phaseName: "Identity Rail Beta", durationMonths: 24, budgetMillionsUSD: 4500, status: 'in-progress', milestones: [] }
      ],
      riskAssessment: [],
      stakeholderFeedbackSummary: { positive: [], negative: [], actionItems: [] }
    };
  }

  public async getProjects(): Promise<ProjectMetadata[]> {
    return new Promise(res => setTimeout(() => res([...this.projects]), 500));
  }

  public async getProjectById(projectId: string): Promise<ProjectMetadata | undefined> {
    return new Promise(res => setTimeout(() => res(this.projects.find(p => p.id === projectId)), 300));
  }

  public async createProject(name: string, initialConstraints: DesignConstraints, userId: string): Promise<ProjectMetadata> {
    return new Promise(res => {
      setTimeout(() => {
        const newProject: ProjectMetadata = {
          id: `PROJ-${this.nextProjectId++}`,
          name,
          description: `Strategic financial infrastructure deployment for ${name}.`,
          createdAt: new Date().toISOString(),
          lastModified: new Date().toISOString(),
          currentBlueprintId: null,
          blueprintHistory: [],
          // Fix: Changed 'admin' to 'editor' as ProjectMetadata collaborators role is restricted to 'viewer' | 'editor' | 'auditor'
          collaborators: [{ userId: userId, role: 'editor' }],
          status: 'active',
          tags: ['digital-finance', 'high-scale'],
          financialApprovalStatus: 'pending',
          riskRating: 'medium'
        };
        this.projects.push(newProject);
        
        const blueprint = this.generateMockBlueprint(initialConstraints, name);
        this.blueprints[blueprint.blueprintId] = blueprint;
        newProject.currentBlueprintId = blueprint.blueprintId;
        newProject.blueprintHistory.push({ 
          blueprintId: blueprint.blueprintId, 
          timestamp: blueprint.timestamp, 
          notes: 'Initial generation', 
          constraintsUsed: initialConstraints 
        });
        
        res({ ...newProject });
      }, 800);
    });
  }

  public async getBlueprintById(id: string): Promise<FinancialInfrastructureBlueprint | undefined> {
    return new Promise(res => setTimeout(() => res(this.blueprints[id]), 500));
  }

  public async generateBlueprint(projectId: string, constraints: DesignConstraints): Promise<FinancialInfrastructureBlueprint> {
    return new Promise(res => {
      setTimeout(() => {
        const project = this.projects.find(p => p.id === projectId);
        if (!project) throw new Error("Project not found");
        
        const blueprint = this.generateMockBlueprint(constraints, project.name);
        this.blueprints[blueprint.blueprintId] = blueprint;
        project.currentBlueprintId = blueprint.blueprintId;
        project.blueprintHistory.push({
          blueprintId: blueprint.blueprintId,
          timestamp: blueprint.timestamp,
          notes: `Refined Blueprint v${blueprint.blueprintId}`,
          constraintsUsed: constraints
        });
        project.lastModified = new Date().toISOString();
        res(blueprint);
      }, 3000);
    });
  }
}

export const api = UrbanSymphonyApiService.getInstance();
