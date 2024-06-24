export const POWER_MODIFIERS = [
  {
    id: 1,
    modifierName: "Additional Recipients (+1)",
    description:
      "The power may affect more than one item for 1 additional Power Point each.",
    shortModifierName: "Additional Recipients",
    cost: 1,
    takeMultiple: true,
    isRequired: false,
    relatedPowers: [11],
  },
  {
    id: 2,
    modifierName: "Additional Recipients (+1)",
    description:
      "The power may affect more than one target for 1 additional Power Point each.",
    shortModifierName: "Additional Recipients",
    cost: 1,
    takeMultiple: true,
    isRequired: false,
    relatedPowers: [
      1, 8, 9, 15, 16, 18, 25, 26, 36, 37, 41, 43, 49, 51, 52, 56, 57, 58,
    ],
  },
  {
    id: 3,
    modifierName: "Additional Recipients (+1)",
    description:
      "The power may affect more than one viewer for 1 additional Power Point each.",
    shortModifierName: "Additional Recipients",
    cost: 1,
    takeMultiple: true,
    isRequired: false,
    relatedPowers: [17],
  },
  {
    id: 4,
    modifierName: "Additional Recipients (+2)",
    description:
      "The power may affect more than one target for 2 additional Power Points each.",
    shortModifierName: "Additional Recipients",
    cost: 2,
    takeMultiple: true,
    isRequired: false,
    relatedPowers: [28, 42],
  },
  {
    id: 5,
    modifierName: "Additional Recipients (+3)",
    description:
      "The power may affect more than one target for 3 additional Power Points each.",
    shortModifierName: "Additional Recipients",
    cost: 3,
    takeMultiple: true,
    isRequired: false,
    relatedPowers: [34],
  },
  {
    id: 6,
    modifierName: "Additional Zombies (+1)",
    description:
      "A larger horde can be raised in a single casting by paying an additional 1 Power Point for each extra zombie raised.",
    shortModifierName: "Additional Zombies",
    cost: 1,
    takeMultiple: true,
    isRequired: false,
    relatedPowers: [59],
  },
  {
    id: 7,
    modifierName: "Area Effect (+0)",
    description:
      "The caster can focus the <i>blast</i> to a Small Blast Template for no extra cost.",
    shortModifierName: "Area Effect",
    cost: 0,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [5],
  },
  {
    id: 8,
    modifierName: "Area Effect (+1)",
    description: "<i>Havoc</i> affects a Large Blast Template.",
    shortModifierName: "Area Effect",
    cost: 1,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [30],
  },
  {
    id: 9,
    modifierName: "Area Effect (+1)",
    description:
      "The caster can focus the <i>blast</i> to a Large Blast Template for +1.",
    shortModifierName: "Area Effect",
    cost: 1,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [5],
  },
  {
    id: 10,
    modifierName: "Area Of Effect (+1)",
    description:
      "The power affects everything in a sphere the size of a Medium Blast Template.. ",
    shortModifierName: "Area Of Effect",
    cost: 1,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [11],
  },
  {
    id: 11,
    modifierName: "Area Of Effect (+2)",
    description:
      "For +2 points the power affects everyone in a Medium Blast Template.",
    shortModifierName: "Area Of Effect",
    cost: 2,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [6, 12, 24, 27, 47, 48, 53],
  },
  {
    id: 12,
    modifierName: "Area Of Effect (+2)",
    description:
      "The power affects everything in a sphere the size of a Large Blast Template. ",
    shortModifierName: "Area Of Effect",
    cost: 2,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [11],
  },
  {
    id: 13,
    modifierName: "Area Of Effect (+3)",
    description:
      "For +3 points the area of effect is increased to a Large Blast Template.",
    shortModifierName: "Area Of Effect",
    cost: 3,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [6, 12, 24, 27, 47, 48, 53],
  },
  {
    id: 14,
    modifierName: "Armed (+1 Per Zombie)",
    description:
      "The dead rise with a rusting weapon common to their setting and environment. Choose one:<br><ul><li>Hand Weapon: Str+d6.</li><li>Ranged Weapon: Range 12/24/48, Damage 2d6.</li></ul>",
    shortModifierName: "Armed",
    cost: 1,
    takeMultiple: true,
    isRequired: false,
    relatedPowers: [59],
  },
  {
    id: 15,
    modifierName: "Armor (+1 Per Zombie)",
    description:
      "The horrors crawl from their grave wearing 2 points of Armor. This might be old chain mail, rusting plate, rotting bulletproof vests, etc.",
    shortModifierName: "Armor",
    cost: 1,
    takeMultiple: true,
    isRequired: false,
    relatedPowers: [59],
  },
  {
    id: 16,
    modifierName: "Audible History (+2)",
    description: "The caster can now hear sounds and conversations as well.",
    shortModifierName: "Audible History",
    cost: 2,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [40],
  },
  {
    id: 17,
    modifierName: "Beast Friend-Size 1 (+1)",
    description:
      "Control a creature from tiny (-4) to large human size (1) or a small swarm.",
    shortModifierName: "Beast Friend-Size 1",
    cost: 1,
    takeMultiple: true,
    isRequired: true,
    relatedPowers: [4],
  },
  {
    id: 18,
    modifierName: "Beast Friend-Size 2 (+2)",
    description: "Control a  size 2 creature or a medium swarm.",
    shortModifierName: "Beast Friend-Size 2",
    cost: 2,
    takeMultiple: true,
    isRequired: true,
    relatedPowers: [4],
  },
  {
    id: 19,
    modifierName: "Beast Friend-Size 3 (+3)",
    description: "Control a size 3 creature or a large swarm.",
    shortModifierName: "Beast Friend-Size 3",
    cost: 3,
    takeMultiple: true,
    isRequired: true,
    relatedPowers: [4],
  },
  {
    id: 20,
    modifierName: "Beast Friend-Size 4 (+4)",
    description: "Control a size 4 creature.",
    shortModifierName: "Beast Friend-Size 4",
    cost: 4,
    takeMultiple: true,
    isRequired: true,
    relatedPowers: [4],
  },
  {
    id: 21,
    modifierName: "Beast Friend-Size 5 (+5)",
    description:
      "Control a size 5 creature.<br>* for larger creatures, add sizes together to calculate the points",
    shortModifierName: "Beast Friend-Size 5",
    cost: 5,
    takeMultiple: true,
    isRequired: true,
    relatedPowers: [4],
  },
  {
    id: 22,
    modifierName: "Bite/Claw (+1)",
    description: "The ally can bite or claw at Str+d6.",
    shortModifierName: "Bite/Claw",
    cost: 1,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [54],
  },
  {
    id: 23,
    modifierName: "Crippling Injuries (+20)",
    description:
      "The power can heal a permanent Crippling Injury (see <strong>Incapacitation</strong>, page 95). This requires an hour of preparation and only one casting is permitted per injury. If it fails, this caster cannot <i>heal</i> that particular injury (but someone else may try). If successful, the subject is Exhausted for 24 hours.",
    shortModifierName: "Crippling Injuries",
    cost: 2,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [31],
  },
  {
    id: 24,
    modifierName: "Damage (+1)",
    description:
      "The <i>barrier</i> causes 2d4 damage to anyone who contacts it.",
    shortModifierName: "Damage",
    cost: 1,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [3],
  },
  {
    id: 25,
    modifierName: "Damage (+2)",
    description: "The <i>blast</i> causes 3d6 damage (4d6 with a raise).",
    shortModifierName: "Damage",
    cost: 2,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [5],
  },
  {
    id: 26,
    modifierName: "Damage (+2)",
    description: "The <i>bolt</i> causes 3d6 damage (4d6 with a raise).",
    shortModifierName: "Damage",
    cost: 2,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [7],
  },
  {
    id: 27,
    modifierName: "Damage (+2)",
    description: "The <i>burst</i> causes 3d6 damage, or 4d6 with a raise.",
    shortModifierName: "Damage",
    cost: 2,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [10],
  },
  {
    id: 28,
    modifierName: "Damage (+2)",
    description: "The <i>damage field</i> causes 2d6 damage.",
    shortModifierName: "Damage",
    cost: 2,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [13],
  },
  {
    id: 29,
    modifierName: "Edit (+1)",
    description:
      "Instead of wiping the memory, the caster edits it as they see fit.",
    shortModifierName: "Edit",
    cost: 1,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [39],
  },
  {
    id: 30,
    modifierName: "Fast Cast (+2)",
    description: "The caster can wipe a memory as an action.",
    shortModifierName: "Fast Cast",
    cost: 2,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [39],
  },
  {
    id: 31,
    modifierName: "Flight (+2)",
    description: "The ally can fly at Pace 12.",
    shortModifierName: "Flight",
    cost: 2,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [54],
  },
  {
    id: 32,
    modifierName: "Greater Healing (+10)",
    description:
      "<i>Greater healing</i> can restore any Wound, including those more than an hour old.",
    shortModifierName: "Greater Healing",
    cost: 1,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [31],
  },
  {
    id: 33,
    modifierName: "Growth/Shrink-Increment 1 (+2)",
    description: "Increase/Decresase size of target by 1",
    shortModifierName: "Growth/Shrink-Increment 1",
    cost: 2,
    takeMultiple: true,
    isRequired: true,
    relatedPowers: [29],
  },
  {
    id: 34,
    modifierName: "Hardened (+1)",
    description: "The wall is Hardness 12.",
    shortModifierName: "Hardened",
    cost: 1,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [3],
  },
  {
    id: 35,
    modifierName: "Mind Rider (+1)",
    description:
      "The caster can communicate and sense through any of the beasts he&apos;s befriended.",
    shortModifierName: "Mind Rider",
    cost: 1,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [4],
  },
  {
    id: 36,
    modifierName: "Mind Rider (+1)",
    description:
      "The caster can communicate and sense through one of the undead he&apos;s conjured. If it&apos;s destroyed, he may jump to any of the others currently under his control.",
    shortModifierName: "Mind Rider",
    cost: 1,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [59],
  },
  {
    id: 37,
    modifierName: "Mind Rider (+1)",
    description: "The caster can communicate and sense through the ally.",
    shortModifierName: "Mind Rider",
    cost: 1,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [54],
  },
  {
    id: 38,
    modifierName: "Mobile (+1)",
    description:
      "The caster can move the area of effect up to his arcane skill die type each round after casting, or attach it to an inanimate object when first cast.",
    shortModifierName: "Mobile",
    cost: 1,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [14, 35],
  },
  {
    id: 39,
    modifierName: "Mobile (+1)",
    description:
      "The caster can move the area of effect up to his arcane skill die type each round.",
    shortModifierName: "Mobile",
    cost: 1,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [46, 50],
  },
  {
    id: 40,
    modifierName: "More Armor (+1)",
    description: "Success grants 4 points of Armor (+6 with a raise).",
    shortModifierName: "More Armor",
    cost: 1,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [41],
  },
  {
    id: 41,
    modifierName: "Neutralize Poison Or Disease (+1)",
    description:
      "A successful <i>healing</i> roll negates any poison or disease. If the poison or disease has a bonus or penalty associated with it, the modifier applies to the arcane skill roll as well.",
    shortModifierName: "Neutralize Poison Or Disease",
    cost: 1,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [31],
  },
  {
    id: 42,
    modifierName: "Permanent (+0)",
    description:
      "The <i>zombie</i> is given unlife until Incapacitated by Wounds. The Power Points used to raise it are &quot;invested&quot; and unavailable until it&apos;s destroyed. The necromancer may terminate his creations&apos; unlife at any time, regardless of sight, distance, or other factors. His Power Points then begin recharging normally.<br>Permanent zombies remain animated even if their creator is slain!",
    shortModifierName: "Permanent",
    cost: 0,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [59],
  },
  {
    id: 43,
    modifierName: "Power (+1)",
    description:
      "For +1 Power Points, <i>dispel</i> can disrupt enchanted devices for one round, or two with a raise. The difficulty to do so is -2 for permanently enchanted items such as found in most swords & sorcery campaigns, or -4 for divine or legendary relics.",
    shortModifierName: "Power",
    cost: 1,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [19],
  },
  {
    id: 44,
    modifierName: "Power (+1)",
    description:
      "The caster can <i>burrow</i> through stone, concrete, or similar substances. (Some substances, like plastic, glass, solid lead, etc., might be resistant at the GM&apos;s discretion.)",
    shortModifierName: "Power",
    cost: 1,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [9],
  },
  {
    id: 45,
    modifierName: "Power (+5)",
    description:
      "The hero can raise a spirit dead up to a decade for +5 Power Points.",
    shortModifierName: "Power",
    cost: 5,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [44],
  },
  {
    id: 46,
    modifierName: "Quickness (+2)",
    description:
      "<i>Speed</i> only. The character&apos;s total Multi-Action penalty each turn is reduced by 2 (The recipient can do two actions at no penalty or three at -2 each).",
    shortModifierName: "Quickness",
    cost: 2,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [52],
  },
  {
    id: 47,
    modifierName: "Shape Change-Novice (+3)",
    description: "Size -4 to Size -1",
    shortModifierName: "Shape Change-Novice",
    cost: 3,
    takeMultiple: false,
    isRequired: true,
    relatedPowers: [45],
  },
  {
    id: 48,
    modifierName: "Shape Change-Seasoned (+5)",
    description: "Size 0",
    shortModifierName: "Shape Change-Seasoned",
    cost: 5,
    takeMultiple: false,
    isRequired: true,
    relatedPowers: [45],
  },
  {
    id: 49,
    modifierName: "Shape Change-Veteran (+8)",
    description: "Size +1 to +2",
    shortModifierName: "Shape Change-Veteran",
    cost: 8,
    takeMultiple: false,
    isRequired: true,
    relatedPowers: [45],
  },
  {
    id: 50,
    modifierName: "Shape Change-Heroic (+11)",
    description: "Size +3 to +4",
    shortModifierName: "Shape Change-Heroic",
    cost: 1,
    takeMultiple: false,
    isRequired: true,
    relatedPowers: [2],
  },
  {
    id: 51,
    modifierName: "Shape Change-Legendary (+15)",
    description: "Size +5 to +10",
    shortModifierName: "Shape Change-Legendary",
    cost: 1,
    takeMultiple: false,
    isRequired: true,
    relatedPowers: [45],
  },
  {
    id: 52,
    modifierName: "Shaped (+2)",
    description:
      "The <i>barrier</i> forms a circle, square or other basic shape.",
    shortModifierName: "Shaped",
    cost: 2,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [3],
  },
  {
    id: 53,
    modifierName: "Size (+1)",
    description: " The length and height of the <i>barrier</i> doubles.",
    shortModifierName: "Size",
    cost: 1,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [3],
  },
  {
    id: 54,
    modifierName: "Size (+1)",
    description:
      "The recipient may assume the shape of someone up to two Sizes larger or smaller than themselves.",
    shortModifierName: "Size",
    cost: 1,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [18],
  },
  {
    id: 55,
    modifierName: "Sound (+1)",
    description:
      "The power generates sound appropriate to the <i>illusion</i>. Illusionary allies may talk, illusionary crows caw, and so on. It may not mask or mute existing sound, however.",
    shortModifierName: "Sound",
    cost: 1,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [32],
  },
  {
    id: 56,
    modifierName: "Speech (+1)",
    description:
      "The recipient retains the power of speech (but still cannot activate powers).",
    shortModifierName: "Speech",
    cost: 1,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [45],
  },
  {
    id: 57,
    modifierName: "Strong (+1)",
    description:
      "<i>Detection</i> rolls to see through the <i>concealment</i> are made at -2.",
    shortModifierName: "Strong",
    cost: 1,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [11],
  },
  {
    id: 58,
    modifierName: "Strong (+1)",
    description: "Strength rolls are made at -2.",
    shortModifierName: "Strong",
    cost: 1,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [30],
  },
  {
    id: 59,
    modifierName: "Strong (+1)",
    description: "The Spirit roll to shake off the effect is made at -2.",
    shortModifierName: "Strong",
    cost: 1,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [36, 47],
  },
  {
    id: 60,
    modifierName: "Strong (+1)",
    description: "The Vigor roll to shake off the effect is made at -2.",
    shortModifierName: "Strong",
    cost: 1,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [6],
  },
  {
    id: 61,
    modifierName: "Strong (+2)",
    description:
      "Smarts rolls to disbelieve the <i>illusion</i> are made at -2. ",
    shortModifierName: "Strong",
    cost: 2,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [32],
  },
  {
    id: 62,
    modifierName: "Strong (+2)",
    description:
      "The <i>entangling</i> material is particularly resilient. Rolls to break free are made at -2 and its Hardness increases to 7.",
    shortModifierName: "Strong",
    cost: 2,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [24],
  },
  {
    id: 63,
    modifierName: "Summon Ally-Novice (+2)",
    description:
      "<i><strong>Attendant</strong></i><br><strong>Attributes:</strong> Agility d4, Smarts d4, Spirit d4, Strength d4, Vigor d4<br><strong>Skills:</strong> Athletics d4, Fighting d4, Notice d4, Shooting d4, Stealth d6<br><strong>Pace:</strong> 4; <strong>Parry:</strong> 4; <strong>Toughness: </strong>4<br><strong>Special Abilities:</strong><br><ul><li><strong>Claw: </strong>Str+d4.</li><li><strong>Construct:</strong> +2 to recover from being Shaken; ignore 1 point of Wound penalties; doesn&apos;t breathe, immune to poison and disease.</li><li><strong>Fearless:</strong> Immune to fear and Intimidation.</li></ul>",
    shortModifierName: "Summon Ally-Novice",
    cost: 2,
    takeMultiple: false,
    isRequired: true,
    relatedPowers: [54],
  },
  {
    id: 64,
    modifierName: "Summon Ally-Seasoned (+4)",
    description:
      "<i><strong>Bodyguard</strong></i><br><strong>Attributes: </strong>Agility d6, Smarts d4, Spirit d6, Strength d6, Vigor d6<br><strong>Skills: </strong>Athletics d6, Fighting d6, Intimidation d6, Notice d4, Shooting d4, Stealth d4<br><strong>Pace: </strong>6; <strong>Parry: </strong>5; <strong>Toughness:</strong> 7 (2)<br><strong>Edges: </strong>First Strike<br><strong>Gear: </strong>Melee attack (Str+d6).<br><strong>Special Abilities:</strong><br><ul><li><strong>Armor +2: </strong>Hardened skin. </li><li><strong>Construct: </strong>+2 to recover from being Shaken; ignore 1 point of Wound penalties; doesn&apos;t breathe, immune to poison and disease. </li><li><strong>Fearless:</strong> Immune to fear and Intimidation. </li></ul>",
    shortModifierName: "Summon Ally-Seasoned",
    cost: 4,
    takeMultiple: false,
    isRequired: true,
    relatedPowers: [54],
  },
  {
    id: 65,
    modifierName: "Summon Ally-Veteran (+6)",
    description:
      "<i><strong>Mirror Self<br></strong></i>The ally is a clone of the caster except: it&apos;s an Extra; it has the same number of current Power Points as the caster <i>after</i> subtracting for this casting; it cannot use the summon ally power; its skills (but not attributes) are one die type less (minimum d4) than the original; it has identical mundane equipment (no magical qualities, disappears when the power expires); has the Construct and Fearless abilities.<br><i>Mirror Self costs +2 power points per Rank above Veteran to a maximum of 10 PPs at Legendary.</i>",
    shortModifierName: "Summon Ally-Veteran",
    cost: 6,
    takeMultiple: false,
    isRequired: true,
    relatedPowers: [54],
  },
  {
    id: 66,
    modifierName: "Summon Ally-Heroic (+8)",
    description:
      "<i><strong>Sentinel</strong></i><br><strong>Attributes: </strong>Agility d6, Smarts d6, Spirit d8, Strength d12+2, Vigor d10<br><strong>Skills: </strong>Athletics d6, Fighting d10, Intimidation d10, Notice d8<br><strong>Pace: </strong>6; <strong>Parry: </strong>7; <strong>Toughness: </strong>13 (4)<br><strong>Edges: </strong>Arcane Resistance, Sweep (Imp).<br><strong>Gear: </strong>Melee attack (Str+d8).<br><strong>Special Abilities:<br><ul><li></strong>&apos; <strong>Armor +4: </strong>Stone skin.</li><li><strong>Construct: </strong>+2 to recover from being Shaken; ignore 1 point of Wound penalties; doesn&apos;t breathe, immune to poison and disease. </li><li><strong>Fearless: </strong>Immune to fear and Intimidation. </li><li><strong>Size 2: </strong>Sentinels are 8' tall and very dense. </li></ul>",
    shortModifierName: "Summon Ally-Heroic",
    cost: 8,
    takeMultiple: false,
    isRequired: true,
    relatedPowers: [54],
  },
  {
    id: 67,
    modifierName: "Targeted (+0)",
    description:
      "Instead of casting <i>silence</i> in an area of effect, the caster may instead target individuals in Range for 1 Power Point each. Unwilling targets resist with Spirit (at -2 if the caster gets a raise).",
    shortModifierName: "Targeted",
    cost: 0,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [46],
  },
  {
    id: 68,
    modifierName: "Teleport Foe (+2)",
    description:
      "Foes may be targeted by a <strong>Touch </strong>attack (page 108). This is an action, so the casting must be the second part of a Multi-Action if the attack is successful. The foe resists the casting with an opposed Spirit roll against the arcane skill total and is sent up to 12&quot; away with success and 24&quot; with a raise. Foes may not be teleported into solid objects.",
    shortModifierName: "Teleport Foe",
    cost: 2,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [56],
  },
  {
    id: 69,
    modifierName: "Toughness (+2)",
    description:
      "<i>Protection</i> provides Toughness instead of Armor and is not affected by AP (magical or otherwise). This means it stacks with natural or worn armor.",
    shortModifierName: "Toughness",
    cost: 2,
    takeMultiple: false,
    isRequired: false,
    relatedPowers: [41],
  },
];