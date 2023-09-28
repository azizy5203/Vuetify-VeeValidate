<script setup>
import RiskCell from './RiskCell.vue';
const risks = [
  {
    Id: 8,
    UniqueId: "f7CKvCfm6dDxNO0uvzD7kQ",
    RowVersion: "AAAAAAAA2I4=",
    Name: "66",
    NameAr: "مرتفع مع 666",
    NameEn: "66",
    MitigationMeasures: null,
    CausedBy: null,
    OwnerId: null,
    OwnerName: "Sameh Abdeltawab Elsayed Fateh Elbab",
    OwnerAcronymName: "SE",
    StatusId: 0,
    StatusName: "Active",
    CategoryId: 0,
    CategoryName: "Operational risk",
    RateId: null,
    RiskRateName: "Sustainable",
    RiskRateColor: "#6BC497",
    RiskImpactId: 3,
    RiskImpactName: "Medium",
    RiskProbabilityId: 1,
    RiskProbabilityName: "Very Low",
    Code: "0008",
    IsRiskOwner: false,
    ProjectName: "Project Gantt Chart",
  },
  {
    Id: 9,
    UniqueId: "g1lHErpVN1N9a75f2JK-AA",
    RowVersion: "AAAAAAAA2HA=",
    Name: "66",
    NameAr: "مرتفع مع 666",
    NameEn: "66",
    MitigationMeasures: null,
    CausedBy: null,
    OwnerId: null,
    OwnerName: "admin admin",
    OwnerAcronymName: "AA",
    StatusId: 0,
    StatusName: "Active",
    CategoryId: 0,
    CategoryName: "Strategic risk",
    RateId: null,
    RiskRateName: "Severe",
    RiskRateColor: "#FFC62B",
    RiskImpactId: 2,
    RiskImpactName: "Low",
    RiskProbabilityId: 5,
    RiskProbabilityName: "Very High",
    Code: "0009",
    IsRiskOwner: true,
    ProjectName: "Project Gantt Chart",
  },
  {
    Id: 10,
    UniqueId: "dgNthcVdThWEs284knswGw",
    RowVersion: "AAAAAAAA1vM=",
    Name: "Very high with medium",
    NameAr: "مرتفع جدا مع متوسط",
    NameEn: "Very high with medium",
    MitigationMeasures: null,
    CausedBy: null,
    OwnerId: null,
    OwnerName: "",
    OwnerAcronymName: "",
    StatusId: 0,
    StatusName: "Active",
    CategoryId: 0,
    CategoryName: "Strategic risk",
    RateId: null,
    RiskRateName: "Severe",
    RiskRateColor: "#FFC62B",
    RiskImpactId: 3,
    RiskImpactName: "Medium",
    RiskProbabilityId: 5,
    RiskProbabilityName: "Very High",
    Code: "0010",
    IsRiskOwner: false,
    ProjectName: "Project Gantt Chart",
  },
  {
    Id: 12,
    UniqueId: "9k3PpvuJO55YX0EH1643zQ",
    RowVersion: "AAAAAAAA1vU=",
    Name: "Very high with Very high",
    NameAr: "مرتفع جدا مع مرتفع جدا ",
    NameEn: "Very high with Very high",
    MitigationMeasures: null,
    CausedBy: null,
    OwnerId: null,
    OwnerName: "",
    OwnerAcronymName: "",
    StatusId: 0,
    StatusName: "Active",
    CategoryId: 0,
    CategoryName: "Strategic risk",
    RateId: null,
    RiskRateName: "Critical",
    RiskRateColor: "#EB6F70",
    RiskImpactId: 5,
    RiskImpactName: "Very High",
    RiskProbabilityId: 5,
    RiskProbabilityName: "Very High",
    Code: "0012",
    IsRiskOwner: false,
    ProjectName: "Project Gantt Chart",
  },
  {
    Id: 13,
    UniqueId: "FVJIWvAJqexSCXUfMnTGQg",
    RowVersion: "AAAAAAAA2Ew=",
    Name: "High with very low",
    NameAr: "خطر مرتفع مع منخفض جدا ",
    NameEn: "High with very low",
    MitigationMeasures: null,
    CausedBy: null,
    OwnerId: null,
    OwnerName: "admin admin",
    OwnerAcronymName: "AA",
    StatusId: 0,
    StatusName: "Active",
    CategoryId: 0,
    CategoryName: "Strategic risk",
    RateId: null,
    RiskRateName: "Sustainable",
    RiskRateColor: "#6BC497",
    RiskImpactId: 1,
    RiskImpactName: "Very Low",
    RiskProbabilityId: 4,
    RiskProbabilityName: "High",
    Code: "0013",
    IsRiskOwner: true,
    ProjectName: "Project Gantt Chart",
  },
  {
    Id: 14,
    UniqueId: "t0lz2Xvuvh0D9BwcTuGgew",
    RowVersion: "AAAAAAAA1vc=",
    Name: "High with low",
    NameAr: "خطر مرتفع مع منخفض",
    NameEn: "High with low",
    MitigationMeasures: null,
    CausedBy: null,
    OwnerId: null,
    OwnerName: "",
    OwnerAcronymName: "",
    StatusId: 0,
    StatusName: "Active",
    CategoryId: 0,
    CategoryName: "Strategic risk",
    RateId: null,
    RiskRateName: "Moderate",
    RiskRateColor: "#FFF82B",
    RiskImpactId: 2,
    RiskImpactName: "Low",
    RiskProbabilityId: 4,
    RiskProbabilityName: "High",
    Code: "0014",
    IsRiskOwner: false,
    ProjectName: "Project Gantt Chart",
  },
  {
    Id: 15,
    UniqueId: "Z5B9KdrVHrolxEnBjU5U_A",
    RowVersion: "AAAAAAAA1vg=",
    Name: "High with medium",
    NameAr: "خطر مرتفع مع متوسط",
    NameEn: "High with medium",
    MitigationMeasures: null,
    CausedBy: null,
    OwnerId: null,
    OwnerName: "",
    OwnerAcronymName: "",
    StatusId: 0,
    StatusName: "Active",
    CategoryId: 0,
    CategoryName: "Strategic risk",
    RateId: null,
    RiskRateName: "Severe",
    RiskRateColor: "#FFC62B",
    RiskImpactId: 3,
    RiskImpactName: "Medium",
    RiskProbabilityId: 4,
    RiskProbabilityName: "High",
    Code: "0015",
    IsRiskOwner: false,
    ProjectName: "Project Gantt Chart",
  },
  {
    Id: 16,
    UniqueId: "a59YZleUkAySZPOfzwNwMA",
    RowVersion: "AAAAAAAA1vk=",
    Name: "High with High",
    NameAr: "خطر مرتفع مع مرتفع",
    NameEn: "High with High",
    MitigationMeasures: null,
    CausedBy: null,
    OwnerId: null,
    OwnerName: "",
    OwnerAcronymName: "",
    StatusId: 0,
    StatusName: "Active",
    CategoryId: 0,
    CategoryName: "Strategic risk",
    RateId: null,
    RiskRateName: "Critical",
    RiskRateColor: "#EB6F70",
    RiskImpactId: 4,
    RiskImpactName: "High",
    RiskProbabilityId: 4,
    RiskProbabilityName: "High",
    Code: "0016",
    IsRiskOwner: false,
    ProjectName: "Project Gantt Chart",
  },
  {
    Id: 17,
    UniqueId: "91lEOeSxnPdW_N7qPBqcmg",
    RowVersion: "AAAAAAAA1vo=",
    Name: "High with Very High",
    NameAr: "خطر مرتفع جدا مع مرتفع",
    NameEn: "High with Very High",
    MitigationMeasures: null,
    CausedBy: null,
    OwnerId: null,
    OwnerName: "",
    OwnerAcronymName: "",
    StatusId: 0,
    StatusName: "Active",
    CategoryId: 0,
    CategoryName: "Strategic risk",
    RateId: null,
    RiskRateName: "Critical",
    RiskRateColor: "#EB6F70",
    RiskImpactId: 5,
    RiskImpactName: "Very High",
    RiskProbabilityId: 4,
    RiskProbabilityName: "High",
    Code: "0017",
    IsRiskOwner: false,
    ProjectName: "Project Gantt Chart",
  },
  {
    Id: 18,
    UniqueId: "7Rp58sufV8zooREG-kwshQ",
    RowVersion: "AAAAAAAA1q4=",
    Name: "medium with very low",
    NameAr: "خطر متوسط مع منخفض جدا ",
    NameEn: "medium with very low",
    MitigationMeasures: null,
    CausedBy: null,
    OwnerId: null,
    OwnerName: "admin admin",
    OwnerAcronymName: "AA",
    StatusId: 0,
    StatusName: "Active",
    CategoryId: 0,
    CategoryName: "Strategic risk",
    RateId: null,
    RiskRateName: "Sustainable",
    RiskRateColor: "#6BC497",
    RiskImpactId: 1,
    RiskImpactName: "Very Low",
    RiskProbabilityId: 3,
    RiskProbabilityName: "Medium",
    Code: "0018",
    IsRiskOwner: true,
    ProjectName: "Project Gantt Chart",
  },
];

const rates = [
    {
        "Id": 1,
        "RiskRateId": 0,
        "RiskRateName": "Moderate",
        "RiskRateColor": "#FFF82B",
        "RiskImpactId": 1,
        "RiskImpactName": "Very Low",
        "RiskProbabilityId": 5,
        "RiskProbabilityName": "Very High",
        "RisksCount": null
    },
    {
        "Id": 2,
        "RiskRateId": 0,
        "RiskRateName": "Sustainable",
        "RiskRateColor": "#6BC497",
        "RiskImpactId": 1,
        "RiskImpactName": "Very Low",
        "RiskProbabilityId": 4,
        "RiskProbabilityName": "High",
        "RisksCount": 1
    },
    {
        "Id": 3,
        "RiskRateId": 0,
        "RiskRateName": "Sustainable",
        "RiskRateColor": "#6BC497",
        "RiskImpactId": 1,
        "RiskImpactName": "Very Low",
        "RiskProbabilityId": 3,
        "RiskProbabilityName": "Medium",
        "RisksCount": 1
    },
    {
        "Id": 4,
        "RiskRateId": 0,
        "RiskRateName": "Sustainable",
        "RiskRateColor": "#6BC497",
        "RiskImpactId": 1,
        "RiskImpactName": "Very Low",
        "RiskProbabilityId": 2,
        "RiskProbabilityName": "Low",
        "RisksCount": null
    },
    {
        "Id": 5,
        "RiskRateId": 0,
        "RiskRateName": "Sustainable",
        "RiskRateColor": "#6BC497",
        "RiskImpactId": 1,
        "RiskImpactName": "Very Low",
        "RiskProbabilityId": 1,
        "RiskProbabilityName": "Very Low",
        "RisksCount": 3
    },
    {
        "Id": 6,
        "RiskRateId": 0,
        "RiskRateName": "Severe",
        "RiskRateColor": "#FFC62B",
        "RiskImpactId": 2,
        "RiskImpactName": "Low",
        "RiskProbabilityId": 5,
        "RiskProbabilityName": "Very High",
        "RisksCount": 1
    },
    {
        "Id": 7,
        "RiskRateId": 0,
        "RiskRateName": "Moderate",
        "RiskRateColor": "#FFF82B",
        "RiskImpactId": 2,
        "RiskImpactName": "Low",
        "RiskProbabilityId": 4,
        "RiskProbabilityName": "High",
        "RisksCount": 1
    },
    {
        "Id": 8,
        "RiskRateId": 0,
        "RiskRateName": "Moderate",
        "RiskRateColor": "#FFF82B",
        "RiskImpactId": 2,
        "RiskImpactName": "Low",
        "RiskProbabilityId": 3,
        "RiskProbabilityName": "Medium",
        "RisksCount": null
    },
    {
        "Id": 9,
        "RiskRateId": 0,
        "RiskRateName": "Sustainable",
        "RiskRateColor": "#6BC497",
        "RiskImpactId": 2,
        "RiskImpactName": "Low",
        "RiskProbabilityId": 2,
        "RiskProbabilityName": "Low",
        "RisksCount": null
    },
    {
        "Id": 10,
        "RiskRateId": 0,
        "RiskRateName": "Sustainable",
        "RiskRateColor": "#6BC497",
        "RiskImpactId": 2,
        "RiskImpactName": "Low",
        "RiskProbabilityId": 1,
        "RiskProbabilityName": "Very Low",
        "RisksCount": null
    },
    {
        "Id": 11,
        "RiskRateId": 0,
        "RiskRateName": "Severe",
        "RiskRateColor": "#FFC62B",
        "RiskImpactId": 3,
        "RiskImpactName": "Medium",
        "RiskProbabilityId": 5,
        "RiskProbabilityName": "Very High",
        "RisksCount": 1
    },
    {
        "Id": 12,
        "RiskRateId": 0,
        "RiskRateName": "Severe",
        "RiskRateColor": "#FFC62B",
        "RiskImpactId": 3,
        "RiskImpactName": "Medium",
        "RiskProbabilityId": 4,
        "RiskProbabilityName": "High",
        "RisksCount": 1
    },
    {
        "Id": 13,
        "RiskRateId": 0,
        "RiskRateName": "Moderate",
        "RiskRateColor": "#FFF82B",
        "RiskImpactId": 3,
        "RiskImpactName": "Medium",
        "RiskProbabilityId": 3,
        "RiskProbabilityName": "Medium",
        "RisksCount": null
    },
    {
        "Id": 14,
        "RiskRateId": 0,
        "RiskRateName": "Moderate",
        "RiskRateColor": "#FFF82B",
        "RiskImpactId": 3,
        "RiskImpactName": "Medium",
        "RiskProbabilityId": 2,
        "RiskProbabilityName": "Low",
        "RisksCount": null
    },
    {
        "Id": 15,
        "RiskRateId": 0,
        "RiskRateName": "Sustainable",
        "RiskRateColor": "#6BC497",
        "RiskImpactId": 3,
        "RiskImpactName": "Medium",
        "RiskProbabilityId": 1,
        "RiskProbabilityName": "Very Low",
        "RisksCount": 1
    },
    {
        "Id": 16,
        "RiskRateId": 0,
        "RiskRateName": "Critical",
        "RiskRateColor": "#EB6F70",
        "RiskImpactId": 4,
        "RiskImpactName": "High",
        "RiskProbabilityId": 5,
        "RiskProbabilityName": "Very High",
        "RisksCount": null
    },
    {
        "Id": 17,
        "RiskRateId": 0,
        "RiskRateName": "Critical",
        "RiskRateColor": "#EB6F70",
        "RiskImpactId": 4,
        "RiskImpactName": "High",
        "RiskProbabilityId": 4,
        "RiskProbabilityName": "High",
        "RisksCount": 1
    },
    {
        "Id": 18,
        "RiskRateId": 0,
        "RiskRateName": "Severe",
        "RiskRateColor": "#FFC62B",
        "RiskImpactId": 4,
        "RiskImpactName": "High",
        "RiskProbabilityId": 3,
        "RiskProbabilityName": "Medium",
        "RisksCount": null
    },
    {
        "Id": 19,
        "RiskRateId": 0,
        "RiskRateName": "Severe",
        "RiskRateColor": "#FFC62B",
        "RiskImpactId": 4,
        "RiskImpactName": "High",
        "RiskProbabilityId": 2,
        "RiskProbabilityName": "Low",
        "RisksCount": null
    },
    {
        "Id": 20,
        "RiskRateId": 0,
        "RiskRateName": "Moderate",
        "RiskRateColor": "#FFF82B",
        "RiskImpactId": 4,
        "RiskImpactName": "High",
        "RiskProbabilityId": 1,
        "RiskProbabilityName": "Very Low",
        "RisksCount": null
    },
    {
        "Id": 21,
        "RiskRateId": 0,
        "RiskRateName": "Critical",
        "RiskRateColor": "#EB6F70",
        "RiskImpactId": 5,
        "RiskImpactName": "Very High",
        "RiskProbabilityId": 5,
        "RiskProbabilityName": "Very High",
        "RisksCount": 1
    },
    {
        "Id": 22,
        "RiskRateId": 0,
        "RiskRateName": "Critical",
        "RiskRateColor": "#EB6F70",
        "RiskImpactId": 5,
        "RiskImpactName": "Very High",
        "RiskProbabilityId": 4,
        "RiskProbabilityName": "High",
        "RisksCount": 1
    },
    {
        "Id": 23,
        "RiskRateId": 0,
        "RiskRateName": "Critical",
        "RiskRateColor": "#EB6F70",
        "RiskImpactId": 5,
        "RiskImpactName": "Very High",
        "RiskProbabilityId": 3,
        "RiskProbabilityName": "Medium",
        "RisksCount": null
    },
    {
        "Id": 24,
        "RiskRateId": 0,
        "RiskRateName": "Critical",
        "RiskRateColor": "#EB6F70",
        "RiskImpactId": 5,
        "RiskImpactName": "Very High",
        "RiskProbabilityId": 2,
        "RiskProbabilityName": "Low",
        "RisksCount": null
    },
    {
        "Id": 25,
        "RiskRateId": 0,
        "RiskRateName": "Severe",
        "RiskRateColor": "#FFC62B",
        "RiskImpactId": 5,
        "RiskImpactName": "Very High",
        "RiskProbabilityId": 1,
        "RiskProbabilityName": "Very Low",
        "RisksCount": null
    }
]
</script>

<template>
  <div class="wrapper">
    <div class="wrapper__labels">
      <div class="wrapper__impact label"><br> <br> <br></div>
      <div class="wrapper__prob label"><span>Probability</span></div>
      <div class="wrapper__very-high label">very-high</div>
      <div class="wrapper__high label">high</div>
      <div class="wrapper__medium label">medium</div>
      <div class="wrapper__low label">low</div>
      <div class="wrapper__very-low label">very-low</div>
    </div>
    <div class="" style="gap:.5rem">

      <div class="label" style="margin-bottom: .5rem;">Imapct</div>
      <div class="wrapper__impact-label-wrapper">
        <div class="wrapper__matrix-cell">very-low</div>
        <div class="wrapper__matrix-cell">low</div>
        <div class="wrapper__matrix-cell">medium</div>
        <div class="wrapper__matrix-cell">high</div>
        <div class="wrapper__matrix-cell">very-high</div>
      </div>
      <div class="wrapper__matrix">
        <RiskCell v-for="(rate,index) in rates" :item="rate" class="wrapper__matrix-cell"/>
        
      </div>
    </div>
  </div>

  <div class="bg-amber">
    <v-tooltip location="top" >
      <template v-slot:activator="{ props }">
        <v-img
          class="cell-wrapper__icon"
          v-bind="props"
          src="../../assets/logo.svg"
          alt=""
          width="25px"
          height="25"
        />
      </template>
      <div class="cell-wrapper__tooltip-content-container">
        <ul>
          <li>asdas</li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
        </ul>
      </div>
    </v-tooltip>
  </div>
</template>

<style lang="scss" scoped>

.wrapper {
  background-color: #e9e9e9;
  max-width: 75%;
  display: grid;
  grid-template-columns: 30% auto;
  gap: 8px;
  padding: 2rem;

  &__labels {
    // max-width: 50%;
    display: grid;
    gap: 8px;
    grid-template: repeat(11, auto) / 12% auto;
    grid-template-areas:
      "impact impact"
      "impact impact"
      "impact impact"
      "impact impact"
      "impact impact"
      "impact impact"
      "prob vHigh"
      "prob high"
      "prob medium"
      "prob low"
      "prob vLow";
  }

  &__impact {
    grid-area: impact;
    color: transparent;
  }
  &__prob {
    grid-area: prob;

    span {
      display: inline-block;
      transform: rotateZ(-90deg) translateX(-5.5rem) translateY(-1.6rem);
      transform-origin: center center;
    }
  }
  &__very-high {
    grid-area: vHigh;
  }
  &__high {
    grid-area: high;
  }
  &__medium {
    grid-area: medium;
  }
  &__low {
    grid-area: low;
  }
  &__very-low {
    grid-area: vLow;
  }

  &__matrix {
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(5, 1fr);
    grid-auto-flow: column;
    gap: 0.5rem;
  }
  &__impact-label-wrapper {
    display: grid;
    grid-template-columns: repeat(5, auto);
    margin-bottom: .5rem;
    gap: .5rem;
  }
  &__matrix-col {
    display: grid;
    gap: 0.5rem;
  }

  &__matrix-cell {
    align-self: center;
    text-align: center;
    background-color: white;
    border-radius: 0.5rem;
    padding: 0.5rem;
    width: 145px;
  }
  .label {
    background-color: white;
    padding: 0.5rem;
    border-radius: 0.5rem;
    text-align: center;
  }
}
</style>
