import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding initial portfolio data...');

  // Initialize page view record
  await prisma.analytics.upsert({
    where: { path: '/' },
    update: {},
    create: {
      path: '/',
      views: 142,
    },
  });

  // Seed Flagship Projects
  const initialProjects = [
    {
      title: 'AetherKernel: Distributed Streaming Engine',
      description: 'Sub-millisecond distributed message queue featuring zero-copy deserialization, transactional durability, and Raft consensus protocols.',
      techStack: 'Rust, TypeScript, Tokio, Raft, gRPC',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      title: 'QuantLens: Real-Time Financial Telemetry',
      description: 'Microsecond order-book processing and analytics engine with WebSocket multiplexing, WebAssembly computation, and tactile charting.',
      techStack: 'Next.js, WebAssembly, TypeScript, Tailwind, WebSockets',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      title: 'SynapseOS: Self-Healing Service Orchestrator',
      description: 'Autonomous cluster supervisor providing real-time partition recovery, distributed rate limiting, and zero-downtime blue/green deployment.',
      techStack: 'Go, Kubernetes, Docker, Prometheus, Next.js',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      title: 'Prisma Dynamic Portfolio CMS',
      description: 'Deliberately precise personal portfolio architecture backed by Prisma ORM, real-time analytics tracking, and encrypted admin control panel.',
      techStack: 'Next.js 15, Prisma ORM, TypeScript, Tailwind CSS, SQLite',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
  ];

  for (const p of initialProjects) {
    const existing = await prisma.project.findFirst({
      where: { title: p.title },
    });
    if (!existing) {
      await prisma.project.create({ data: p });
    }
  }

  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
