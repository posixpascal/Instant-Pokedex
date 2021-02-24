export default function getEvoTrigger(evo) {
  const triggerName = evo.evolution_details[0].trigger.name
  let triggers = Object.entries(evo.evolution_details[0])
  .filter(([k, v]) => v != null && v != "" && k != "trigger");
  switch (triggerName) {
    case "level-up":
    return triggers.map(t => (t[0].replace("_"," ") + " " + t[1]));
    case "use-item":
    return  triggers.map(t => (t[1].name.replace("-"," ")));
    case "trade":
    return triggers.map(t => ("trade" + " while holding " + t[1].name.replace("-"," ")));
  }
  return "Evolution trigger not handled yet";
}
