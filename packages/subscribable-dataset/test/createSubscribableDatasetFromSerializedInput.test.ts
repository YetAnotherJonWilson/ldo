import { serializedToSubscribableDataset } from "../src";
import { turtleData, jsonLdData } from "@ldo/dataset/test/sampleData";

describe("createExtendedDatasetFromSerializedInput", () => {
  it("creates a dataset with turtle", async () => {
    const dataset = await serializedToSubscribableDataset(turtleData);
    expect(dataset.size).toBe(9);
  });

  it.skip("creates a dataset with json-ld", async () => {
    const dataset = await serializedToSubscribableDataset(
      JSON.stringify(jsonLdData),
      {
        format: "application/ld+json",
      },
    );
    expect(dataset.size).toBe(9);
  });
});
