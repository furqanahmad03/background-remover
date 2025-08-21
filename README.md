# 🎨 BG Remover - AI-Powered Background Removal Tool

A modern, responsive web application that automatically removes backgrounds from images using AI technology. Built with Next.js, TypeScript, and Tailwind CSS for a seamless user experience.

## ✨ Features

### 🖼️ **Image Upload & Processing**
- **Drag & Drop Interface** - Intuitive file upload with visual feedback
- **Multiple Format Support** - JPG, PNG, GIF up to 10MB
- **Real-time Preview** - See your selected image before processing
- **Smart Validation** - Only accepts image files

### 🤖 **AI Background Removal**
- **Powered by @imgly/background-removal** - State-of-the-art AI technology
- **Fast Processing** - Background removal in seconds
- **High Quality Results** - Maintains original image quality
- **Transparency Support** - Perfect for design projects

### 💾 **Download & Export**
- **Multiple Formats** - PNG and JPG with transparency
- **Instant Download** - One-click download with progress indicator
- **Smart Naming** - Automatic file naming with timestamps
- **Quality Preservation** - No quality loss during processing

### 🎨 **Modern UI/UX**
- **Responsive Design** - Works perfectly on all devices
- **Beautiful Interface** - Modern design with gradients and shadows
- **Loading States** - Visual feedback during processing
- **Interactive Elements** - Hover effects and smooth animations

## 🚀 Technology Stack

- **Frontend Framework** - Next.js 15 with App Router
- **Language** - TypeScript for type safety
- **Styling** - Tailwind CSS for modern design
- **Background Removal** - @imgly/background-removal library
- **State Management** - React Hooks
- **Build Tool** - Turbopack for fast development

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bg-remover
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Usage

### **Step 1: Upload Image**
- Drag and drop an image onto the upload area, or
- Click to browse and select an image from your device
- Supported formats: JPG, PNG, GIF (max 10MB)

### **Step 2: Remove Background**
- Click the "Remove Background" button
- Wait for AI processing to complete
- View real-time progress with loading indicators

### **Step 3: Download Result**
- Choose your preferred format (PNG or JPG)
- Click "Download Image" to save to your device
- Files are automatically named with timestamps

## 🏗️ Project Structure

```
bg-remover/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Main application page
│   │   └── globals.css         # Global styles
│   └── components/
│       ├── Navbar.tsx          # Navigation header
│       ├── ImageUpload.tsx     # Image upload component
│       └── BackgroundRemoved.tsx # Results display component
├── public/                     # Static assets
├── package.json               # Dependencies and scripts
└── README.md                  # This file
```

## 🔧 Available Scripts

- **`npm run dev`** - Start development server with Turbopack
- **`npm run build`** - Build for production
- **`npm run start`** - Start production server
- **`npm run lint`** - Run ESLint for code quality

## 🎨 Design Features

### **Visual Elements**
- **Gradient Text** - Modern typography with color gradients
- **Rounded Corners** - Soft, friendly interface design
- **Shadow Effects** - Depth and visual hierarchy
- **Hover Animations** - Interactive feedback and engagement

### **Color Scheme**
- **Primary** - Blue to Purple gradients
- **Success** - Green to Emerald for actions
- **Neutral** - Gray scale for text and backgrounds
- **Accent** - Blue highlights for interactive elements

### **Responsive Layout**
- **Desktop** - Two-column layout for optimal workflow
- **Mobile** - Stacked layout for touch-friendly interaction
- **Tablet** - Adaptive layout that works on all screen sizes

## 🌟 Key Benefits

- **Professional Quality** - Enterprise-grade background removal
- **User-Friendly** - Intuitive interface for all skill levels
- **Fast Processing** - AI-powered speed and accuracy
- **No Registration** - Start using immediately
- **Privacy Focused** - Images processed locally, not stored
- **Cross-Platform** - Works on any device with a web browser

## 🔮 Future Enhancements

- **Batch Processing** - Multiple image upload and processing
- **Advanced Editing** - Fine-tune removal results
- **Cloud Storage** - Save and manage processed images
- **API Access** - Integration with other applications
- **Custom Backgrounds** - Add new backgrounds to images

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **@imgly/background-removal** - For the powerful AI background removal technology
- **Next.js Team** - For the excellent React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Vercel** - For the amazing deployment platform

---

**Built with ❤️ using modern web technologies**
