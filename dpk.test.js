const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("should return 0 if there is no event", () => {
    expect(deterministicPartitionKey()).toBe("0");
  });

  it("should return event's partitionKey if it exists", () => {
    expect(deterministicPartitionKey({ partitionKey: "abc" })).toBe("abc");
  });

  it("should hash the event if it doesn't have a partitionKey", () => {
    const event = { foo: "bar" };
    const hashEvent = crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");
    expect(deterministicPartitionKey(event)).toBe(hashEvent);
  });

  it("should stringify if it has a partitionKey and its type is not string", () => {
    expect(deterministicPartitionKey({ partitionKey: 123})).toBe("123");
  });
});
