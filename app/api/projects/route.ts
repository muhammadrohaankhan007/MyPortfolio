import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET all projects
export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}

// POST new project (Admin)
export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body.title || !body.description || !body.techStack) {
      return NextResponse.json({ error: 'Title, description, and tech stack are required' }, { status: 400 });
    }

    const newProject = await prisma.project.create({
      data: {
        title: body.title,
        description: body.description,
        techStack: body.techStack,
        githubUrl: body.githubUrl || null,
        liveUrl: body.liveUrl || null,
      },
    });
    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    console.error('Failed to create project:', error);
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}

// DELETE project (Admin)
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    if (!id) {
      return NextResponse.json({ error: 'Project ID is required' }, { status: 400 });
    }
    await prisma.project.delete({ where: { id } });
    return NextResponse.json({ message: 'Project deleted' });
  } catch (error) {
    console.error('Failed to delete project:', error);
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
  }
}
