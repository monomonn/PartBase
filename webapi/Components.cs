using System.Text.Json.Serialization;


public class PCPart
{
    [JsonPropertyName("name")]
    public string? Name { get; set; } 

    [JsonPropertyName("price")]
    public decimal? Price { get; set; } 

    
}

public class CPU : PCPart
{
    [JsonPropertyName("core_count")]
    public int? CoreCount { get; set; }

    [JsonPropertyName("core_clock")]
    public double? CoreClock { get; set; }

    [JsonPropertyName("boost_clock")]
    public double? BoostClock { get; set; }

    [JsonPropertyName("tdp")]
    public int? Tdp { get; set; }

    [JsonPropertyName("graphics")]
    public string? Graphics { get; set; }

    [JsonPropertyName("smt")]
    public bool? Smt { get; set; }

    [JsonPropertyName("socket")]
    public string? Socket { get; set; }
}

public class GPU : PCPart
{
    [JsonPropertyName("chipset")]
    public string? Chipset { get; set; }

    [JsonPropertyName("memory")]
    public double? Memory { get; set; }

    [JsonPropertyName("core_clock")]
    public double? CoreClock { get; set; }

    [JsonPropertyName("boost_clock")]
    public double? BoostClock { get; set; }

    [JsonPropertyName("color")]
    public string? Color { get; set; }

    [JsonPropertyName("length")]
    public int? Length { get; set; }
}

public class Motherboard : PCPart
{
    [JsonPropertyName("socket")]
    public string? Socket { get; set; }

    [JsonPropertyName("form_factor")]
    public string? FormFactor { get; set; }

    [JsonPropertyName("max_memory")]
    public double? MaxMemory { get; set; }

    [JsonPropertyName("memory_slots")]
    public double? MemorySlots { get; set; }

    [JsonPropertyName("color")]
    public string? Color { get; set; }

    [JsonPropertyName("ram")]
    public string? Ram { get; set; }
}

public class PSU : PCPart
{
    [JsonPropertyName("type")]
    public string? Type { get; set; }

    [JsonPropertyName("efficiency")]
    public string? Effeciency { get; set; }

    [JsonPropertyName("wattage")]
    public double? Wattage { get; set; }

    [JsonPropertyName("modular")]
    public object? Modular { get; set; }

    [JsonPropertyName("color")]
    public string? Color { get; set; }

}
public class Memory : PCPart
{
    [JsonPropertyName("speed")]
    public int?[] Speed { get; set; } 

    [JsonPropertyName("modules")]
    public int[] Modules { get; set; } 

    [JsonPropertyName("price_per_gb")]
    public decimal? PricePerGB { get; set; } 

    [JsonPropertyName("color")]
    public string? Color { get; set; } 

    [JsonPropertyName("first_word_latency")]
    public decimal? FirstWordLatency { get; set; } 

    [JsonPropertyName("cas_latency")]
    public float? CasLatency { get; set; }

    [JsonPropertyName("ram")]
    public string? Ram { get; set; }
}

public class Case : PCPart
{
    [JsonPropertyName("type")]
    public string? Type { get; set; }

    [JsonPropertyName("color")]
    public string? Color { get; set; }

    [JsonPropertyName("psu")]
    public double? PSU { get; set; }

    [JsonPropertyName("side_panel")]
    public string? SidePanel { get; set; }

    [JsonPropertyName("external_525_bays")]
    public int? External525Bays { get; set; }

    [JsonPropertyName("internal_35_bays")]
    public int? Internal35Bays { get; set; }
}