// --- UTILITY TYPES --------------------

interface Profile {
  name: string;
  gender: string;
  email: string;
  age: number;
  isMod: boolean;
}

// | Object Manipulation Types |

// Partial - Makes all properties optional
type PartialProfile = Partial<Profile>;

// Required - Makes all properties mandatory
type RequiredProfile = Required<Profile>;

// Readyonly - Makes all properties read only
type ReadonlyProfile = Readonly<Profile>;

// Record - Creates object from keys
type RecordProfile = Record<keyof Profile, string>;

// Pick - Selects specific properties
type PickProfile = Pick<Profile, "name" | "gender" | "age">;

// Omit - Removes specific properties
type OmitProfile = Omit<Profile, "email" | "isMod">;

// | Union Manupulation Types |

// Exclude - Removes specific unions
type ExcludeProfile = Exclude<Profile, "email" | "isMod">;

// Extract - Keeps specific unions
type ExtractProfile = Extract<Profile, "name" | "age">;

// NonNullable - Excludes null & undefined
type NonnullProfile = NonNullable<Profile>;

// | Function Types |

// Parameters - Gets function parameters (inputs)
function updateProfile(name: string, age: number): void {}

type ParametersProfile = Parameters<typeof updateProfile>;

// ReturnType - Gets function types (outputs)
function createProfile(): Profile {
  return {
    name: "Pennai",
    gender: "male",
    email: "pennai@gmail.com",
    age: 21,
    isMod: false,
  };
}

type ReturnProfile = ReturnType<typeof createProfile>;

// | Class / Object Types |
//ConstructorParameter -

// InstanceType -

// ThisParameterType -

// OmitThisParameter -

// ThisType-

// | String Manipulation Types |
// Upppercase -

// Lowercase -

// Capitalize -

// Uncapitalize -
