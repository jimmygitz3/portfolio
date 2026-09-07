import { AnnotationTechnique, AnnotationTool, ProjectDataset, ToolWorkflowItem, Testimonial, NavItem } from '../types';

export const PERSONAL_INFO = {
  name: "James Muigai",
  role: "Data Annotator and ML Specialist",
  tagline: "Bridging the gap between raw unstructured data and production-ready machine learning models through rigorous labeling discipline, pipeline engineering, and high QA compliance.",
  summary: "Detail-oriented Data Annotator and ML Specialist with dedicated training and hands-on experience delivering computer vision (bounding boxes, polygon segmentation) and NLP text tagging. Proficient in CVAT, Labelbox, Roboflow, and Label Studio. Passionate about dataset hygiene, edge-case disambiguation, and meeting tight submission schedules. Completed 12 verified annotation projects with a 99.2% benchmark accuracy rate.",
  location: "Nairobi, Kenya (Available Remote Worldwide)",
  email: "jimmygitz3@gmail.com",
  phone: "+254726995935",
  whatsapp: "https://wa.me/254726995935",
  linkedin: "https://www.linkedin.com/in/james-gitau-muigai/",
  github: "https://github.com/jimmygitz3",
  stats: [
    { label: "Completed Projects", value: "12", detail: "Focused benchmark & client batches (<20)" },
    { label: "Quality Adherence", value: "99.2%", detail: "Average Gold Standard consensus score" },
    { label: "Total Annotations", value: "24k+", detail: "Across CV, NLP, and audio domains" },
    { label: "Primary Tools", value: "5+", detail: "CVAT, Labelbox, Roboflow, Label Studio" },
  ]
};

export const ANNOTATION_TECHNIQUES: AnnotationTechnique[] = [
  {
    id: "bounding-boxes",
    name: "Bounding Boxes & Rotated BBoxes",
    category: "Computer Vision",
    description: "Pixel-accurate rectangular and oriented bounding box labeling for object localization, vehicle tracking, and retail shelf item detection.",
    useCase: "Autonomous vehicles, edge surveillance, SKU detection",
    toleranceStandard: "±2px edge adherence, zero clipping of extremities",
    iconName: "Square"
  },
  {
    id: "semantic-segmentation",
    name: "Polygon & Semantic Segmentation",
    category: "Computer Vision",
    description: "Fine-grained boundary extraction and pixel-level classification separating background, road topology, biological tissue, and foreground objects.",
    useCase: "Medical histology, autonomous drivable surface, satellite mapping",
    toleranceStandard: "Sub-pixel spline accuracy, 98.5%+ IoU target",
    iconName: "Spline"
  },
  {
    id: "keypoint-tracking",
    name: "Keypoint & Skeletal Estimation",
    category: "Computer Vision",
    description: "Anatomical coordinate landmark positioning for human posture, facial action units, sports biomechanics, and robotic hand articulation.",
    useCase: "Ergonomics, gesture control, athletic tracking",
    toleranceStandard: "Precise joint pivot centering with occlusion flags",
    iconName: "Crosshair"
  },
  {
    id: "text-tagging-ner",
    name: "Text Tagging & Named Entity Recognition",
    category: "Natural Language Processing",
    description: "Span-level syntactic labeling, PII redaction, entity classification (person, organization, geo-loc, date), and nested relation extraction.",
    useCase: "Legal contract analysis, healthcare records, financial reports",
    toleranceStandard: "Exact boundary span selection, zero orphaned punctuation",
    iconName: "FileText"
  },
  {
    id: "intent-classification",
    name: "Intent & Sentiment Classification",
    category: "Natural Language Processing",
    description: "Hierarchical intent mapping, customer support utterance categorization, fine-grained emotional sentiment, and conversational slot tagging.",
    useCase: "Customer service chatbots, voice assistants, brand monitoring",
    toleranceStandard: "Rigorous taxonomy alignment with multi-label support",
    iconName: "MessageSquare"
  },
  {
    id: "3d-point-clouds",
    name: "3D LiDAR Cuboids & Sensor Fusion",
    category: "Sensor & Audio",
    description: "3D oriented bounding box positioning in point cloud environments paired synchronously with 2D camera projections and heading vectors.",
    useCase: "Autonomous vehicles, robotics spatial navigation",
    toleranceStandard: "Orientation accuracy within ±3°, ground-plane snap",
    iconName: "Box"
  }
];

export const ANNOTATION_TOOLS: AnnotationTool[] = [
  {
    id: "cvat",
    name: "CVAT (Computer Vision Annotation Tool)",
    category: "Open Source",
    proficiency: "Expert",
    yearsExperience: 1.5,
    highlight: "Daily production work with video tracking, keypoint interpolation, bounding box edge adherence, and multi-attribute classification.",
    supportedFormats: ["YOLO 1.1", "COCO JSON", "Pascal VOC", "CVAT for Video"]
  },
  {
    id: "labelbox",
    name: "Labelbox",
    category: "Enterprise Suite",
    proficiency: "Advanced",
    yearsExperience: 1,
    highlight: "Ontology schema navigation, benchmark review queues, model-assisted pre-label verification, and polygon segmentation.",
    supportedFormats: ["COCO JSON", "Pascal VOC", "NDJSON"]
  },
  {
    id: "roboflow",
    name: "Roboflow",
    category: "Web Platform",
    proficiency: "Advanced",
    yearsExperience: 1.5,
    highlight: "Dataset health inspection, bounding box labeling, data augmentation, class distribution balancing, and YOLOv8 export.",
    supportedFormats: ["YOLOv8 PyTorch", "TFRecord", "CreateML", "VOC XML"]
  },
  {
    id: "label-studio",
    name: "Label Studio",
    category: "Open Source",
    proficiency: "Advanced",
    yearsExperience: 1,
    highlight: "Configured text entity tagging (NER), sentiment classification, image polygon masking, and audio segment labeling.",
    supportedFormats: ["JSON-MIN", "COCO", "CSV", "CoNLL 2003"]
  },
  {
    id: "prodigy",
    name: "Prodigy",
    category: "Enterprise Suite",
    proficiency: "Proficient",
    yearsExperience: 1,
    highlight: "Active learning NLP spans, entity classification, and rapid annotation iteration with spaCy compatibility.",
    supportedFormats: ["JSONL", "spaCy docbin", "CSV"]
  },
  {
    id: "v7-darwin",
    name: "V7 Darwin",
    category: "Enterprise Suite",
    proficiency: "Proficient",
    yearsExperience: 1,
    highlight: "Auto-annotate polygon assistance, medical slice inspection, and polygon boundary refinement.",
    supportedFormats: ["Darwin JSON", "COCO", "TIFF Masks"]
  }
];

export const PROJECTS_DATA: ProjectDataset[] = [
  {
    id: "urban-road-detection",
    title: "UrbanRoad: Autonomous Object Detection & 2D BBoxes",
    category: "Autonomous Driving",
    domain: "Computer Vision / Mobility",
    description: "Bounding box annotation for vehicles, pedestrians, cyclists, and traffic signage across dense suburban and city street recordings.",
    volume: "4,800 Annotated Frames",
    accuracyRate: "99.4% QA Benchmark",
    toolsUsed: ["CVAT", "Roboflow", "Python"],
    taxonomySample: ["Car / SUV", "Pedestrian", "Bicycle / Motorbike", "Traffic Light (Red/Green)", "Street Sign", "Road Obstacle"],
    contributions: [
      "Delivered pixel-tight 2D bounding boxes with ±2px boundary margin around occluded vehicles.",
      "Identified and cataloged edge-cases including reflective glare and rain-splattered camera lenses.",
      "Zero rejected batches during weekly client quality control sampling."
    ],
    visualType: "bboxes"
  },
  {
    id: "agri-leaf-segmentation",
    title: "AgriLeaf: Crop Foliage Disease Polygon Segmentation",
    category: "Geospatial",
    domain: "Computer Vision / Agriculture",
    description: "Detailed polygon segmentation separating healthy leaf surface, blight lesions, and fungal spots to train automated crop health diagnostics.",
    volume: "2,500 High-Res Images",
    accuracyRate: "99.1% IoU Metric",
    toolsUsed: ["Label Studio", "Roboflow", "Python"],
    taxonomySample: ["Healthy Foliage", "Early Blight", "Late Blight", "Rust Pustule", "Stem Background"],
    contributions: [
      "Annotated complex, organic leaf margins with multi-vertex sub-pixel polygon contours.",
      "Maintained 99.1% mean Intersection-over-Union (mIoU) consistency with agricultural benchmark sets.",
      "Exported unified COCO JSON masks ready for PyTorch semantic segmentation."
    ],
    visualType: "segmentation"
  },
  {
    id: "retail-shelf-sku",
    title: "RetailShelf: Supermarket SKU & Barcode Localization",
    category: "Autonomous Driving",
    domain: "Computer Vision / Retail AI",
    description: "Bounding box localization and multi-attribute classification for supermarket packaged goods, shelf tags, and empty stock gaps.",
    volume: "3,600 Shelf Photos",
    accuracyRate: "99.2% QA Consensus",
    toolsUsed: ["CVAT", "Labelbox"],
    taxonomySample: ["Beverage Bottle", "Cereal Box", "Price Tag", "Out-of-Stock Void", "Barcode Label"],
    contributions: [
      "Labeled overlapping and tightly packed merchandise on multi-tiered supermarket gondolas.",
      "Handled perspective distortion on wide-angle camera feeds without clipping bottle caps.",
      "Maintained high labeling pace of 85+ validated bounding boxes per hour."
    ],
    visualType: "bboxes"
  },
  {
    id: "fin-extract-ner",
    title: "FinExtract: Invoice & Receipt Named Entity Recognition",
    category: "NLP & LLMs",
    domain: "Natural Language Processing / Fintech",
    description: "Character-exact span entity annotation across digitized commercial invoices, receipts, and utility bills for an OCR information extraction pipeline.",
    volume: "5,200 Documents",
    accuracyRate: "99.5% Span Agreement",
    toolsUsed: ["Label Studio", "spaCy CLI"],
    taxonomySample: ["Vendor Name", "Invoice Number", "Transaction Date", "Line Item", "Tax Amount", "Total Balance"],
    contributions: [
      "Applied strict token boundary rules with zero trailing whitespace or orphaned punctuation.",
      "Disambiguated date formatting variations across international receipt templates.",
      "Curated 300 gold-standard ground truth samples to calibrate model benchmarking."
    ],
    visualType: "ner"
  },
  {
    id: "derm-check-roi",
    title: "DermCheck: Skin Lesion Region-of-Interest Segmentation",
    category: "Medical AI",
    domain: "Medical AI / Healthcare",
    description: "Region of interest delineation on clinical dermatological photography under training guidelines from healthcare AI researchers.",
    volume: "1,800 Clinical Samples",
    accuracyRate: "98.9% Consensus IoU",
    toolsUsed: ["Label Studio", "V7 Darwin"],
    taxonomySample: ["Melanocytic Nevus", "Seborrheic Keratosis", "Erythema Margin", "Healthy Skin Border"],
    contributions: [
      "Carefully traced irregular, faded pigment margins with detailed polygon vertices.",
      "Observed strict anonymization and data handling guidelines for medical imagery.",
      "Conducted double-blind verification against senior annotator reference sets."
    ],
    visualType: "segmentation"
  },
  {
    id: "voice-intent-audio",
    title: "VoiceCommand: Bilingual Speech Intent & Slot Tagging",
    category: "NLP & LLMs",
    domain: "Audio & Speech / Multimodal",
    description: "Time-stamped audio segment transcription and slot tagging for mobile voice commands in English and East African accented speech.",
    volume: "2,400 Audio Utterances",
    accuracyRate: "99.5% Audio Alignment",
    toolsUsed: ["Label Studio", "Audacity", "Google Sheets"],
    taxonomySample: ["Wake Word", "App Action (Send/Pay/Call)", "Recipient Name", "Currency Value", "Confirmation"],
    contributions: [
      "Precision millisecond-level time boundary alignment on speech onset and offset.",
      "Accurate phonetic and dialect slot categorization for regional acoustic variation.",
      "Delivered clean JSON annotation manifests with zero audio-text desynchronization."
    ],
    visualType: "ner"
  }
];

export const TOOLS_WORKFLOW: ToolWorkflowItem[] = [
  {
    name: "Python & Pandas",
    category: "Scripting & Automation",
    proficiency: "Proficient",
    description: "Write sanity-check scripts, coordinate verification, detect bounding box clipping, and automate dataset splits (train/val/test).",
    icon: "Code"
  },
  {
    name: "Excel & Google Sheets",
    category: "Quality Assurance",
    proficiency: "Advanced",
    description: "Class taxonomy matrices, tracking inter-annotator agreement (IAA), error logging, and daily milestone reports.",
    icon: "Table"
  },
  {
    name: "Cloud Storage (Google Drive / AWS S3)",
    category: "Cloud & Storage",
    proficiency: "Comfortable",
    description: "Batch data download, structured folder hierarchy maintenance, zip staging, and secure dataset transfers.",
    icon: "Cloud"
  },
  {
    name: "Standard Data Formats (YOLO, COCO, VOC)",
    category: "Data Formats",
    proficiency: "Advanced",
    description: "Familiarity converting between YOLO normalized coordinates, COCO JSON polygon structures, and Pascal VOC XML tags.",
    icon: "FileCode"
  },
  {
    name: "Roboflow & Label Studio Tools",
    category: "Quality Assurance",
    proficiency: "Advanced",
    description: "Dataset health inspection, identifying false positives, label distribution checking, and duplicate image cleanup.",
    icon: "Eye"
  },
  {
    name: "Git & GitHub",
    category: "Scripting & Automation",
    proficiency: "Comfortable",
    description: "Maintaining personal QA verification scripts, sharing guideline documentation, and versioning dataset schemas.",
    icon: "GitBranch"
  }
];

export const PIPELINE_STEPS = [
  {
    step: "01",
    title: "Guideline Onboarding",
    description: "Thorough study of client labeling specs, boundary rules, class taxonomy definitions, and calibration on sample benchmark sets."
  },
  {
    step: "02",
    title: "Tool & Hotkey Calibration",
    description: "Configuring CVAT, Label Studio, or Labelbox workspace, setting keyboard hotkeys, and verifying zoom settings for precision."
  },
  {
    step: "03",
    title: "Disciplined Annotation",
    description: "Consistent, pixel-tight labeling with sub-pixel edge alignment, occlusion flags, and adhering to strict daily volume quotas."
  },
  {
    step: "04",
    title: "Self-Audit & QA Verification",
    description: "Reviewing all tagged frames, running Python sanity checks on bounding box coordinates, and checking for missing classes."
  },
  {
    step: "05",
    title: "Export & Delivery Inspection",
    description: "Exporting to target formats (YOLO, COCO JSON, CSV), validating coordinate boundaries, and preparing client delivery reports."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    quote: "James joined our urban object detection pilot as a junior annotator and immediately stood out for his focus and consistency. His bounding boxes adhered strictly to our ±2px rule with zero edge clipping. Reliable, communicative, and very quick to assimilate feedback.",
    author: "David Kariuki",
    role: "AI Project Manager & QA Lead",
    organization: "AfriData Solutions",
    projectFocus: "Urban Mobility & Vehicle Detection",
    avatarInitials: "DK"
  },
  {
    id: "test-2",
    quote: "Annotating crop disease foliage requires patience and fine polygon handling. James demonstrated remarkable discipline on over 2,500 leaf images, achieving over 99% IoU agreement with our reference sets. A promising data annotator who takes pride in data quality.",
    author: "Grace Mwangi",
    role: "Computer Vision Researcher",
    organization: "AgriTech Insights Lab",
    projectFocus: "Foliage Disease Polygon Segmentation",
    avatarInitials: "GM"
  },
  {
    id: "test-3",
    quote: "For our commercial receipt NER extraction, exact character spans are paramount. James delivered over 5,200 tagged receipts without trailing punctuation errors or label bleed. He is organized, detail-oriented, and hits his delivery milestones without fail.",
    author: "Michael Otieno",
    role: "Lead Machine Learning Engineer",
    organization: "FinScan Analytics",
    projectFocus: "Financial Document Entity Tagging",
    avatarInitials: "MO"
  }
];

export const NAV_LINKS: NavItem[] = [
  { label: "Page 1: Profile & Skills", href: "#page-1", id: "page-1" },
  { label: "Page 2: Projects & Contact", href: "#page-2", id: "page-2" }
];
