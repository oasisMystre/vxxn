import { joinPath, type XiorInstance } from "xior";
import { format } from "../utils";

export abstract class ApiImpl {
  protected abstract readonly path: string;

  constructor(protected readonly xior: XiorInstance) {}

  protected buildPath(...values: (string | number)[]) {
    const path = values.map(String).reduce(joinPath);
    return joinPath(this.path, path);
  }

  protected buildPathWithQueryString<T extends Record<string, never>>(
    path: string,
    params: T
  ) {
    const query = new URLSearchParams(params as Record<string, string>);
    return format("%?%", path, query.toString());
  }
}
