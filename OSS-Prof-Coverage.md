%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'18px', 'fontFamily':'Arial'}}}%%
graph TB
    subgraph "Foundation Characteristics Space"
        subgraph covered["<b>COVERED in This Study</b>"]
            style covered fill:#E8F5E9,stroke:#4CAF50,stroke-width:3px
            
            A1["<b>Governance Models</b><br/>✓ Meritocratic/Community-driven<br/>✓ Corporate-backed/Vendor-neutral<br/>✓ Domain-specific expert review"]
            
            A2["<b>Decision-Making & Communication</b><br/>✓ Consensus voting + mailing lists<br/>✓ PMC oversight + flexible channels<br/>✓ Multi-tier expert review"]
            
            A3["<b>Incubation Processes</b><br/>✓ Strict Apache Way adherence<br/>✓ IP-focused legal review<br/>✓ Flexible multi-tier pathways"]
            
            A4["<b>Project Scale & Domain</b><br/>✓ Large general-purpose (350+ projects)<br/>✓ Large enterprise-focused (420+ projects)<br/>✓ Small domain-specific GIS (68 projects)"]
            
            A5["<b>Funding Models</b><br/>✓ Donation-based<br/>✓ Corporate membership fees<br/>✓ Grants + conference revenue"]
            
            A6["<b>Community Types</b><br/>✓ Volunteer-driven open communities<br/>✓ Corporate contributors<br/>✓ Academic/research communities"]
        end
        
        subgraph uncovered["<b>NOT COVERED in This Study</b>"]
            style uncovered fill:#FFEBEE,stroke:#F44336,stroke-width:3px
            
            B1["<b>Single-Vendor Governance</b><br/>✗ Corporate ownership models<br/>✗ Benevolent dictator structures"]
            
            B2["<b>Specialized Foundations</b><br/>✗ Cloud-native (CNCF)<br/>✗ Scientific computing (NumFOCUS)<br/>✗ Language-specific (Python, Ruby)"]
            
            B3["<b>Infrastructure & Systems</b><br/>✗ Linux Foundation model<br/>✗ Kernel/hardware projects"]
            
            B4["<b>Hybrid Licensing</b><br/>✗ Dual licensing strategies<br/>✗ Mixed proprietary/OSS models"]
        end
    end
    
    subgraph foundations["<b>Study Foundations → Unique Characteristics</b>"]
        direction LR
        
        F1["<b>Apache Software<br/>Foundation</b><br/><br/>262 projects"]
        F2["<b>Eclipse<br/>Foundation</b><br/><br/>161 projects"]
        F3["<b>OSGeo<br/>Foundation</b><br/><br/>20 projects"]
        
        F1 --> C1["<b>Meritocratic governance</b><br/>+ Community consensus"]
        F1 --> C2["<b>Apache Way enforcement</b><br/>+ Mandatory mailing lists"]
        F1 --> C3["<b>Donation-based funding</b><br/>+ Volunteer community"]
        
        F2 --> C4["<b>Corporate-backed model</b><br/>+ Vendor-neutral governance"]
        F2 --> C5["<b>Strict IP/legal review</b><br/>+ PMC oversight"]
        F2 --> C6["<b>Membership fee funding</b><br/>+ Enterprise focus"]
        
        F3 --> C7["<b>Domain-specific GIS</b><br/>+ Research orientation"]
        F3 --> C8["<b>Expert review panels</b><br/>+ Multi-tier incubation"]
        F3 --> C9["<b>Grant funding model</b><br/>+ Academic community"]
    end
    
    style F1 fill:#FFB74D,stroke:#E65100,stroke-width:3px,color:#000
    style F2 fill:#64B5F6,stroke:#0D47A1,stroke-width:3px,color:#000
    style F3 fill:#81C784,stroke:#1B5E20,stroke-width:3px,color:#000
    
    style C1 fill:#FFF3E0,stroke:#E65100,stroke-width:2px
    style C2 fill:#FFF3E0,stroke:#E65100,stroke-width:2px
    style C3 fill:#FFF3E0,stroke:#E65100,stroke-width:2px
    
    style C4 fill:#E3F2FD,stroke:#0D47A1,stroke-width:2px
    style C5 fill:#E3F2FD,stroke:#0D47A1,stroke-width:2px
    style C6 fill:#E3F2FD,stroke:#0D47A1,stroke-width:2px
    
    style C7 fill:#E8F5E9,stroke:#1B5E20,stroke-width:2px
    style C8 fill:#E8F5E9,stroke:#1B5E20,stroke-width:2px
    style C9 fill:#E8F5E9,stroke:#1B5E20,stroke-width:2px
    
    style A1 fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px
    style A2 fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px
    style A3 fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px
    style A4 fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px
    style A5 fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px
    style A6 fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px
    
    style B1 fill:#FFCDD2,stroke:#C62828,stroke-width:2px
    style B2 fill:#FFCDD2,stroke:#C62828,stroke-width:2px
    style B3 fill:#FFCDD2,stroke:#C62828,stroke-width:2px
    style B4 fill:#FFCDD2,stroke:#C62828,stroke-width:2px
