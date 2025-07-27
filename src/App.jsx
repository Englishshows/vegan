import React, { useState } from "react";

const argumentsData = [
  {
    id: 1,
    argument: "Humans are meant to eat meat. It’s natural.",
    tags: ["ethical", "practical", "factual"],
    responses: {
      ethical: "Nature isn’t a moral compass. Murder and disease are natural too—doesn’t make them right.",
      practical: "In modern society, we have abundant, affordable alternatives. We’re not in caveman mode.",
      factual: "'Natural' diets vary wildly across cultures and time. Our biology supports herbivory just fine.",
    },
  },
  {
    id: 2,
    argument: "Lions eat meat. It’s part of the food chain.",
    tags: ["ethical", "practical", "factual", "troll-logic"],
    responses: {
      ethical: "Lions also kill their cubs. Are you planning to do that too? Morality =/= mimicry.",
      practical: "We’re moral agents with choice and accountability. Lions aren’t.",
      factual: "Lions are obligate carnivores. Humans are not. You can survive—and thrive—without meat.",
    },
  },
  {
    id: 3,
    argument: "But we evolved to eat meat!",
    tags: ["ethical", "practical", "factual"],
    responses: {
      ethical: "Evolution gave us fists too. Doesn’t mean punching toddlers is defensible.",
      practical: "Evolution gave us the option—modern ethics helps decide how to use it.",
      factual: "Yes, we adapted to digest meat—but that doesn’t mean we need it now. Plant-based diets meet all nutritional needs.",
    },
  },
  {
    id: 4,
    argument: "Animals aren't intelligent, so it’s fine to eat them.",
    tags: ["ethical", "practical", "factual"],
    responses: {
      ethical: "Intelligence isn’t the basis for moral worth. Babies and disabled people aren’t less deserving of rights.",
      practical: "Using intelligence as a moral filter is a slippery slope you don’t want to ride.",
      factual: "Pigs outperform dogs on cognition tests. Intelligence doesn’t determine capacity to suffer.",
    },
  },
  {
    id: 5,
    argument: "Vegan diets are unhealthy / deficient.",
    tags: ["ethical", "practical", "factual"],
    responses: {
      ethical: "Even if it were harder, morality isn’t always convenient. But bonus: it’s not.",
      practical: "A balanced vegan diet is totally nutritionally adequate with basic planning.",
      factual: "Every major dietetic org agrees: vegan diets are healthy at all life stages. B12 is just a supplement, not a flaw.",
    },
  },
  {
    id: 6,
    argument: "Veganism kills animals too—crop deaths!",
    tags: ["ethical", "practical", "factual"],
    responses: {
      ethical: "Intentional vs. collateral harm matters morally. Veganism minimizes suffering.",
      practical: "Animal ag causes more crop deaths—you’re feeding crops to animals first.",
      factual: "80% of soy goes to livestock feed. Eating plants directly = fewer total deaths.",
    },
  },
  {
    id: 7,
    argument: "My personal choice—don’t force it on me.",
    tags: ["ethical", "practical", "factual"],
    responses: {
      ethical: "'Personal choice' ends where others’ suffering begins. It's not personal for the victims.",
      practical: "We regulate behavior that harms others all the time (murder, pollution, etc.).",
      factual: "Choices have ripple effects. Animal ag is one of the top drivers of climate change, pandemics, and antibiotic resistance.",
    },
  },
  {
    id: 8,
    argument: "Veganism is elitist or too expensive.",
    tags: ["ethical", "practical", "factual"],
    responses: {
      ethical: "Ethics aren’t reserved for the wealthy. Many poor communities already eat mostly plants.",
      practical: "Rice, beans, oats, lentils = some of the cheapest staples globally.",
      factual: "Study after study shows vegan diets can be cheaper than meat-heavy ones.",
    },
  },
  {
    id: 9,
    argument: "You can’t raise kids vegan—it’s dangerous.",
    tags: ["ethical", "practical", "factual"],
    responses: {
      ethical: "Teaching compassion and nonviolence isn’t dangerous—it’s a gift.",
      practical: "With smart planning, it’s completely safe and nutritionally sound.",
      factual: "Pediatric and dietetic orgs in the US, UK, and Canada all support well-planned vegan diets for children.",
    },
  },
  {
    id: 10,
    argument: "If we didn’t eat animals, they’d go extinct.",
    tags: ["ethical", "practical", "factual"],
    responses: {
      ethical: "Existence under lifelong exploitation isn’t mercy. It's enslavement.",
      practical: "We preserve wild animals without factory farming them.",
      factual: "Farm animals are bred into existence. Ending demand = they stop being born into suffering—not extinction in a natural sense.",
    },
  },
];

export default function App() {
  const [tone, setTone] = useState("ethical");
  const [filter, setFilter] = useState("");

  const filteredArguments = argumentsData.filter((arg) =>
    filter === "" || arg.tags.includes(filter)
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Vegan Apologetics</h1>
      <div className="flex gap-4 mb-6">
        <select onChange={(e) => setTone(e.target.value)} value={tone} className="border p-2 rounded">
          <option value="ethical">🧘 Ethical</option>
          <option value="practical">🔧 Practical</option>
          <option value="factual">📊 Factual</option>
        </select>
        <select onChange={(e) => setFilter(e.target.value)} value={filter} className="border p-2 rounded">
          <option value="">All Tags</option>
          <option value="ethical">Ethical</option>
          <option value="practical">Practical</option>
          <option value="factual">Factual</option>
          <option value="troll-logic">Troll Logic</option>
        </select>
      </div>
      <div className="space-y-6">
        {filteredArguments.map((arg) => (
          <div key={arg.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">❓ {arg.argument}</h2>
            <p className="text-gray-700">{arg.responses[tone]}</p>
            <div className="mt-2 text-sm text-gray-500">Tags: {arg.tags.join(", ")}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
