export default function getEvoTrigger(evo) {
  const triggerName = evo.evolution_details[0].trigger.name;
  const triggers = Object.entries(evo.evolution_details[0]).filter(
    ([k, v]) => v != null && v != false && v != "" && k != "trigger"
  );
  return triggers.length == 0
    ? triggerName
    : triggers.map(
        (t) =>
          t[0].replaceAll("_", " ") +":" +
          (t[1] !== undefined
            ? t[1].name !== undefined
              ? " " + t[1].name.replaceAll("-", " ")
              : " " + t[1]
            : "") +
          "  "
      );
}
