import { Actor } from "./actor.model";
import { Crew } from "./crew.model";

export interface Credits {
    cast: Array<Actor>;
    crew: Array<Crew>;
}
